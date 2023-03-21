import React from 'react'

export default function NavigationBar({ props }) {
// props are not working
	return (
		<nav className='navBar'>
			<ul className="flex gap-12 justify-center items-center p-4 backdrop-blur-lg border-b bg-white bg-opacity-60 border-gray-200 md-gap-16">
				<li >
					<a href="home">{props.home}Home</a>
				</li>
				<li>
					<a href="profile">{props.profile}Profile</a>
				</li>
				<li>
					<a href="skills">{props.skills}Skills</a>
				</li>
				<li >
					<a href="projects">{props.projects}Projects</a>
				</li>
				<li>
					<a href="contact">{props.contact}Contact</a>
				</li>
			</ul>
		</nav>
	)
}
