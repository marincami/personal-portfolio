import React from 'react'

export default function Skills({ skill }) {

	return (
		<div>
			<p>I love learning new things. Here is a list of technologies I have worked with.</p>
			<div className='skills-grid'>
				<div className='skill-box'>
					<p>HTML5</p>
				</div>
				<div className='skill-box'>
					<p>CSS3</p>
				</div>
				<div className='skill-box'>
					<p>Javascript</p>
				</div>
				<div className='skill-box'>
					<p>React</p>
				</div>
				<div className='skill-box'>
					<p>Angular+9</p>
				</div>
				<div className='skill-box'>
					<p>Typescript</p>
				</div>
				<div className='skill-box'>
					<p>Jasmine</p>
				</div>
				<div className='skill-box'>
					<p>Jest</p>
				</div>
				<div className='skill-box'>
					<p>GraphQl</p>
				</div>
				<div className='skill-box'>
					<p>Github</p>
				</div>
			</div>
		</div>
	)
}
