import React from 'react'
import Slider from 'react-slick'

import { useState } from 'react'
import Image1 from '../../assets/img/slider1.jpg'
import Image2 from '../../assets/img/slider2.jpg'
import Image3 from '../../assets/img/slider3.jpg'
import Image4 from '../../assets/img/slider4.jpg'
import Image5 from '../../assets/img/slider5.jpg'
import '../../assets/styles/slider.css'
import '../../assets/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css'

const Slider1 = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	}
	return (
		<div
			style={{
				height: '350px',
				width: '100%',
				position: 'relative',
				zIndex: '10000000',
				overflow: 'hidden',
				borderRadius: '2px'
			}}
		>
			<Slider {...settings}>
				<div style={{ height: '100%', width: '100%' }}>
					<img
						style={{ height: '100%', width: '100%', objectFit: 'cover' }}
						src={Image1}
						alt=""
					/>
				</div>
				<div style={{ height: '100%', width: '100%' }}>
					<img
						style={{ height: '100%', width: '100%', objectFit: 'cover' }}
						src={Image2}
						alt=""
					/>
				</div>
				<div style={{ height: '100%', width: '100%' }}>
					<img
						style={{ height: '100%', width: '100%', objectFit: 'cover' }}
						src={Image3}
						alt=""
					/>
				</div>
				<div style={{ height: '100%', width: '100%' }}>
					<img
						style={{ height: '100%', width: '100%', objectFit: 'cover' }}
						src={Image4}
						alt=""
					/>
				</div>
				<div style={{ height: '100%', width: '100%' }}>
					<img
						style={{ height: '100%', width: '100%', objectFit: 'cover' }}
						src={Image5}
						alt=""
					/>
				</div>
			</Slider>
		</div>
	)
}

export default Slider1
