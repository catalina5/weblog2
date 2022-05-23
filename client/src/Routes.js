import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'

import NotFound from './components/NotFound'
import Detail from './components/Detail'
import { path } from './constants/path'
import Creator from './layouts/Creator/Creator'
import Register from './layouts/Login/Register'
import BlogTag from './layouts/BlogTag/BlogTag'
import About from './layouts/About/About'

const Router = () => {
	return (
		<Routes>
			<Route path={path.home} element={<Home />} />
			<Route path={path.login} element={<Login />} />
			<Route path={path.register} element={<Register />} />
			<Route path={path.create} element={<Creator />} />
			<Route path={path.edit} element={<Creator />} />
			<Route path={path.notFound} element={<NotFound />} />
			<Route path={path.productDetail} element={<Detail />} />
			<Route path={path.about} element={<About />} />
			<Route path={path.BlogTag} element={<BlogTag />} />
		</Routes>
	)
}

export default Router
