const Bookmark = require('../models/bookmark')
const router = require('express').Router();

// Create
  router.post('/', async(req, res) => {
    try{
      const createdBookmark = await Bookmark.create(req.body)
      res.status(200).json(createdBookmark)
    }catch(error){
      console.error(error)
      res.status(400).json({ message: error.message })
    }
  })
// Read
  /* Index */
    router.get('/', async (req, res) => {
      try{
        const foundBookmarks = await Bookmark.find({})
        res.status(200).json(foundBookmarks)
      }catch(error){
        console.error(error);
        res.status(400).json({ message: error.message });
      }
    })
  /* Show */
  router.get('/:id', async (req, res) => {
    try{
      const foundBookmark = await Bookmark.findById(req.params.id)
      res.status(200).json(foundBookmark)
    }catch(error){
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  })
// Update
  /* Update */
  router.put('/:id', async (req, res) => {
    try {
      const updatedBookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).json(updatedBookmark)
    }catch(error){
      console.error(error);
      res.status(400).json({ message: error.message })
    }
  })
  /* Add Comment */
  // Create A Comment
  // Take said comment and add it to the comment array of the ....
  // ....Blog in question
  // Send back a relevant response
  /*
    const createdComment = await Comment.create(req.body)
    const updatedBlog = await Blog.findByIdAndUpdate()

  router.put('/:id/addComment', (req, res) => {
    //store the query
    const createCommentQuery = Comment.create(req.body)
    // actually run query
    createCommentQuery.exec((err, createdComment) => {
      if (err){
        console.error(err);
        res.status(400).json({ message: err.message});
      } else {
        const updateBlogQuery = Blog.findByIdAndUpdate(req.params.id, { $addToSet: { comments: createdComment._id }}, { new: true })
        // actually run it
        updateBlogQuery.exec((err, updatedBlog) => {
              if(err){
                console.error(err);
                res.status(400).json({ message: err.message })
              } else {
                res.status(200).json(createdComment)
              }
        })
      }
    })
  })
  */

// Delete
router.delete('/:id', async (req, res) => {
  try{
    const deletedBookmark = await Bookmark.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBookmark);
  } catch(error){
    console.error(error);
    res.status(400).json({ message: error.message})
  }
})
module.exports = router;
