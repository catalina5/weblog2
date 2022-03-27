import React from 'react'
import banner1 from '../../assets/img/banner1.jpg'
import '../../assets/styles/banner.css'

const Banner = () => {
	return (
		<div>
			<div className="banner-container">
				<img className="banner-img" src={banner1}></img>
				<div className="banner-main">
					<h1 className="banner-main-heading">Gird with camera style </h1>
					<div className="banner-main-content">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
						magni tempora rerum ratione? Tenetur nobis corporis fugiat
						repudiandae eaque ullam voluptates ratione delectus, magnam nostrum
						quidem sequi quibusdam, aliquid iure.
					</div>
					<button className="banner-main-btn">Read More</button>
				</div>
			</div>
		</div>
	)
}

export default Banner
