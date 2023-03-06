import React from 'react'

export default function NavigationBar() {

	return (
		<nav className='navBar'>
			<ul className="flex gap-12 justify-center items-center p-4 backdrop-blur-lg border-b bg-white bg-opacity-60 border-gray-200 md-gap-16">
				<li >
					<a href="home">Home</a>
				</li>
				<li>
					<a href="profile">Profile</a>
				</li>
				<li>
					<a href="skills">Skills</a>
				</li>
				<li >
					<a href="projects">Projects</a>
				</li>
				<li>
					<a href="contact">Contact</a>
				</li>
			</ul>
		</nav>
	)
}
