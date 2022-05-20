import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layouts/Home/Home'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Detail from './components/Detail'
import { path } from './constants/path'
import Creator from './layouts/Creator/Creator'

const Router = () => {
	return (
		<Routes>
			<Route path={path.home} element={<Home />} />
			<Route path={path.login} element={<Login />} />
			<Route path={path.register} element={<Register />} />
			<Route path={path.create} element={<Creator />} />
			<Route path={path.notFound} element={<NotFound />} />
			<Route path={path.productDetail} element={<Detail />} />
		</Routes>
	)
}

export default Router
