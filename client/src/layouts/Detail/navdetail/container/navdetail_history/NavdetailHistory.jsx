import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBlogs } from 'src/redux/features/blogSlice'
import './Navdetail_history.css'
import moment from 'moment'

export const NavdetailHistory = () => {
	const { blogs } = useSelector(state => state.blog)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
	return (
		<>
			<div className="huyoccho">
				<h1 className="mt-4">Random Posts</h1>
				<div className="">
					{blogs &&
						blogs
							.slice(1, 4)
							.map(item => (
								<ItemCon
									key={item._id}
									id={item._id}
									img={item.imageFile}
									title={item.title}
									time={item.createdAt}
								></ItemCon>
							))}
				</div>
			</div>
			<div>
				<h1 className="mt-4">Recent Posts</h1>
				<div className="">
					{blogs &&
						blogs
							.slice(0, 3)
							.map(item => (
								<ItemCon
									key={item._id}
									id={item._id}
									img={item.imageFile}
									title={item.title}
									time={item.createdAt}
								></ItemCon>
							))}
				</div>
			</div>
		</>
	)
}

export const ItemCon = ({ id, img, title, time }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/blog/${id}`)} className="post-item">
			<div className="post-item-img">
				<img src={img} alt="" />
			</div>
			<div className="content__type">
				{title}
				<div className="huy">
					<i className="fa-solid fa-clock"></i>
					{moment(time).fromNow()}
				</div>
			</div>
		</div>
	)
}
