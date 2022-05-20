import React from 'react'
import Footer from 'src/layouts/Detail/footer/Footer'
import Header from 'src/layouts/Detail/header/Header'
import { Navdetail_container } from 'src/layouts/Detail/navdetail/navdetail_container/Navdetail_container'

const Detail = () => {
	return (
		<div>
			<Header />
			<Navdetail_container />
			<Footer />
		</div>
	)
}

export default Detail
