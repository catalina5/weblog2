import React from 'react'
import Footer from 'src/layouts/Detail/footer/Footer'
import Header from 'src/layouts/Detail/header/Header'
import { NavdetailContainer } from 'src/layouts/Detail/navdetail/container/NavdetailContainer'

const Detail = () => {
	return (
		<div>
			<Header />
			<NavdetailContainer />
			<Footer />
		</div>
	)
}

export default Detail
