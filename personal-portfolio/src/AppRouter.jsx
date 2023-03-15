/*
import Skills from './Skills'
import Projects from './Projects'


import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/profile' element={<Profile />}></Route>
				<Route path='/skills' element={<Skills />}></Route>
				<Route path='/projects' element={<Projects />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
    </BrowserRouter>
	)
}
*/

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Profile from './Profile'
import Skills from './Skills'
import Projects from './Projects'
// import data from "./data.json";

export default function AppRouter({routes}) {
	
	function getComponent(elementName) {
		let component;
		switch(elementName) {
			case 'Contact':
				component = Contact 
				break
			case 'Profile':
				component = Profile 
				break
			case 'Skills':
				component = Skills 
				break
			case 'Projects':
				component = Projects 
				break
			default:
				component = Home
		}
		return component
	}

  return (
		<BrowserRouter>
			<Routes>
			{ routes.map(({path, elementName, props}) => (
				<Route path={ path } element={ React.createElement(getComponent(elementName), props)} > </Route>
			)) }
			</Routes>
		</BrowserRouter>
	)
}