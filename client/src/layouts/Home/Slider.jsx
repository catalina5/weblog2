import React from 'react'
import { useState } from 'react'
import Image1 from '../../assets/img/slider1.jpg'
import Image2 from '../../assets/img/slider2.jpg'
import Image3 from '../../assets/img/slider3.jpg'
import Image4 from '../../assets/img/slider4.jpg'
import Image5 from '../../assets/img/slider5.jpg'
import '../../assets/styles/slider.css'
import '../../assets/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css'

const Slider = () => {
	// tăng
	const [count, setCount] = useState(0)
	const handleCount = () => {
		console.log('tăng')
		if (count === -3075) {
			setCount(615)
		}
		setCount(count => count - 615)
		console.log(count)
	}
	//giảm
	const handleDiscount = () => {
		console.log('Giảm')
		if (count === 0 ) {
			setCount(-3690)
		}
		setCount(count => count + 615)
		console.log(count)
	}
	return (
		<div className="container-slider">
			<div className="slider-list">
				<div
					className="slider-translate "
					style={{ transform: `translateX(${count}px)` }}
				>
					<div className="slider-list-items">
						<img src={Image1} alt="" className="slider-list_item" />
						<div className="slider-list-content">
							<div className="slider-list-content_item">Learn</div>
							<div className="slider-list-content_text">Left Slidebar Post</div>
						</div>
					</div>
					<div className="slider-list-items">
						<img src={Image2} alt="" className="slider-list_item" />
						<div className="slider-list-content">
							<div className="slider-list-content_item">Learn</div>
							<div className="slider-list-content_text">Left Slidebar Post</div>
						</div>
					</div>
					<div className="slider-list-items">
						<img src={Image3} alt="" className="slider-list_item" />
						<div className="slider-list-content">
							<div className="slider-list-content_item">Learn</div>
							<div className="slider-list-content_text">Left Slidebar Post</div>
						</div>
					</div>
					<div className="slider-list-items">
						<img src={Image4} alt="" className="slider-list_item" />
						<div className="slider-list-content">
							<div className="slider-list-content_item">Learn</div>
							<div className="slider-list-content_text">Left Slidebar Post</div>
						</div>
					</div>
					<div className="slider-list-items">
						<img src={Image5} alt="" className="slider-list_item" />
						<div className="slider-list-content">
							<div className="slider-list-content_item">Learn</div>
							<div className="slider-list-content_text">Left Slidebar Post</div>
						</div>
					</div>
					<div className="slider-list-items">
						<img src={Image3} alt="" className="slider-list_item" />
						<div className="slider-list-content">
							<div className="slider-list-content_item">Learn</div>
							<div className="slider-list-content_text">Left Slidebar Post</div>
						</div>
					</div>
				</div>
			</div>
			<div className="btn-list">
				<div onClick={handleDiscount} className="btn-list-item">
					<i className="slider-btn fa fa-angle-left" aria-hidden="true"></i>
				</div>
				<div onClick={handleCount} className="btn-list-item">
					<i className="slider-btn fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	)
}

export default Slider
