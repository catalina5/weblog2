import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layouts/Home/Home'
import Login from './components/Login'
import User from './components/User'
import Register from './components/Register'
import NotFound from './components/NotFound'
import { path } from './constants/path'

const Router = () => {
	return (
		<Routes>
			<Route path={path.home} element={<Home />} />
			<Route path={path.login} element={<Login />} />
			<Route path={path.register} element={<Register />} />
			<Route path={path.user} element={<User />} />
			<Route path={path.notFound} element={<NotFound />} />
		</Routes>
	)
}

export default Router
