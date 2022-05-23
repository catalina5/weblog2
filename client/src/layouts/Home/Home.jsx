import React from 'react'
import '../../assets/styles/home.css'
import Contact from './Contact'
import Banner from './Banner'
import Contents from './Contents'
import Slider from './Slider'
import HomeRecent from './HomeRecent'

const Home = () => {
	return (
		<div>
			<div className="Home container-fruid">
				<div className="row justify-content-between">
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 home_banner">
						<Banner />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 home_content">
						<div className="demo">
							<Slider />
							<Contents />
						</div>
						<br />
						<HomeRecent />
						<Contact />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
