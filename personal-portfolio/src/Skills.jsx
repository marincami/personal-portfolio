import React from 'react'

export default function Skills({ skills }) {

	return (
		<div>
			<p>I love learning new things. Here is a list of technologies I have worked with.</p>
			<div className='skills-grid'>
				{skills.map((skill) =>
					<p className='skill-box' key={skill}>{skill}</p> // key to identify each item in the list
				)}
			</div>
		</div>
	)
}
