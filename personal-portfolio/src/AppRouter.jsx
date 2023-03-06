import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'
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
