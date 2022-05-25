import React, { useEffect } from 'react'
import { useState } from 'react'
import Image1 from '../../assets/img/slider1.jpg'
import Image2 from '../../assets/img/slider2.jpg'
import Image3 from '../../assets/img/slider3.jpg'
import Image4 from '../../assets/img/slider4.jpg'
import Image5 from '../../assets/img/slider5.jpg'
import '../../assets/styles/slider.css'
import '../../assets/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from 'src/redux/features/blogSlice'
import { Link } from 'react-router-dom'

const Slider = () => {
	const { blogs } = useSelector(state => state.blog)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
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
		if (count === 0) {
			setCount(-3690)
		}
		setCount(count => count + 615)
		console.log(count)
	}
	return (
		<div className="container-slider">
			{/* <div className="slider-list mt-4">
				<h1 className="slider-heading">More Top Stories</h1>
				<div
					className="slider-translate  mt-4"
					style={{ transform: `translateX(${count}px)` }}
				>
					{blogs &&
						blogs.slice(0, 5).map((item, index) => (
							<div className="slider-list-items">
								<div className="slider-list-item">
									<img
										src={item.imageFile}
										alt=""
										className="slider-list_item"
									/>
								</div>
								<div className="slider-list-content">
									<Link
										to={`/blog/${item._id}`}
										className="slider-list-content_item"
									>
										Read more
									</Link>
									<div className="slider-list-content_text">
										Left Slidebar Post
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className="btn-list">
				<div onClick={handleDiscount} className="btn-list-item">
					<i className="slider-btn fa fa-angle-left" aria-hidden="true"></i>
				</div>
				<div onClick={handleCount} className="btn-list-item">
					<i className="slider-btn fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</div> */}
			slide
		</div>
	)
}

export default Slider
