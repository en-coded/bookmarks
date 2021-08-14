import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Home(props) {
	const [bookmark, setBookmarks] = useState([]); // <==== Bookmark State
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks');
				const data = await response.json();
				setBookmarks(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<div className="HomePage">
			<ul>
				{bookmark.map(bookmark => {
					return (
						<li key={bookmark._id}>
							<Link to={`/${bookmark._id}`}>
								<h3>{bookmark.title}</h3>
							</Link>
							<p>{bookmark.link}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
