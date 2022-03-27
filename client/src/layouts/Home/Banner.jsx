import React, { useState } from 'react'
import banner1 from '../../assets/img/banner1.jpg'
import '../../assets/styles/banner.css'
import Menu from './Menu'
import styled from 'styled-components'
const ToggleButton = styled.button`
	height: max-content;
	width: 40px;
	height: 40px;
	border: none;
	color: white;
	background-color: #a873ff;
	font-size: 20px;
	font-weight: bold;
	margin: 10px 10px 0 0;
	border-radius: 100rem;
	position: absolute;
	z-index: 100;
	right: 0;
`
const Banner = () => {
	const [isActive, setIsActive] = useState(false)
	console.log(isActive)
	const handleToggle = () => {
		setIsActive(isActive => !isActive)
	}
	const color = '#fff'
	return (
		<div>
			<div className="banner-container">
				<Menu
					isActive={isActive}
					setIsActive={setIsActive}
					color={color}
				></Menu>
				<ToggleButton onClick={handleToggle}>
					{!isActive && <i className="fa-solid fa-bars"></i>}
					{isActive && <i className="fa-solid fa-xmark"></i>}
				</ToggleButton>
				<img className="banner-img" src={banner1} alt=""></img>
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
