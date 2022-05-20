import React, { Fragment, useEffect, useState } from 'react'
import '../../assets/styles/banner.css'
import Menu from './Menu'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from 'src/redux/features/blogSlice'
import { Link } from 'react-router-dom'
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
	const { blogs } = useSelector(state => state.blog)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
	const [isActive, setIsActive] = useState(false)
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
				{blogs &&
					blogs.slice(0, 1).map(blog => (
						<Fragment key={blog._id}>
							<img className="banner-img" src={blog.imageFile} alt=""></img>
							<div className="banner-main">
								<h1 className="banner-main-heading">{blog.title} </h1>
								<div className="banner-main-content">{blog.description}</div>
								<button className="banner-main-btn">
									<Link to={`blog/${blog._id}`}>Read More</Link>
								</button>
							</div>
						</Fragment>
					))}
			</div>
		</div>
	)
}

export default Banner
