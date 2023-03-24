import React, { useState } from 'react'

export default function Projects() {
	const [projects, setProjects] = useState([]);

	fetch('https://api.tvmaze.com/search/shows?q=the')
		.then((response) => response.json())
		.then((data) => setProjects(data)) // returns name, id, url, type, language, images, genres, etc
		.catch(error => console.log(error));

	// className="card" the styles failed
  return (
		<div style={{ display: 'flex' }}>
			{projects.map((project) => (
				<div className="card" style={{ margin: '10px', height: '25rem', width: '15rem', boxShadow: '2px 2px 2px 2px #535bf2' }}>
					<h2>{project.show.name}</h2>
					<img style={{ marginTop: '10px', height: '15rem', width: '15rem' }} src={project.show.image.medium}></img>
					<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
				</div>
			))}
		</div>
  )
}
