import React, { useEffect, useState } from 'react'
import '../../assets/styles/home_recent.css'
import { FaUser } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import data from 'src/data'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from 'src/redux/features/blogSlice'

const Home_Posts = () => {
	const [moreElement, setMoreElement] = useState(6)
	const { blogs } = useSelector(state => state.blog)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
	const loadMore = () => {
		setMoreElement(moreElement + moreElement)
	}
	const navigate = useNavigate()
	return (
		<div className="home-posts">
			<div className="home-post-title">
				<h3>Recent posts</h3>
			</div>

			<div className="">
				<div className="row">
					{blogs?.map((item, index) => {
						return (
							<div
								key={item._id}
								className="posts-item col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5 mb-2"
							>
								<Link to={`blog/${item._id}`} className="link-recent">
									<div className="posts-item-overlay">
										<img src={item.imageFile} alt="" />
									</div>
									<div className="posts-item-content">
										<h2>
											<div>{item.title}</div>
										</h2>
										<div className="posts-item-info">
											<div className="item-info-box">
												<FaUser className="item-info-icon" />
												<span>{item.creator}</span>
											</div>
											<div className="item-info-box">
												<GoClock className="item-info-icon" />
												<span>{item.createdAt}</span>
											</div>
										</div>
									</div>
								</Link>
								<button onClick={() => navigate(`/blog/tag/${item.tags}`)}>
									{item.tags}
								</button>
							</div>
						)
					})}
				</div>

				<div className="load-more" onClick={() => loadMore()}>
					<button>
						{data.homePost.length >= moreElement
							? 'Load More'
							: 'That this all'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home_Posts
