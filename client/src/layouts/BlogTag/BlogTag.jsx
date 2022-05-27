import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getBlogByTag } from 'src/redux/features/blogSlice'

const BlogTag = () => {
	const { tagBlog } = useSelector(state => ({ ...state.blog }))
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { tag } = useParams()
	console.log(tag)
	console.log(tagBlog)
	useEffect(() => {
		if (tag) {
			dispatch(getBlogByTag(tag))
		}
	}, [dispatch, tag])
	return (
		<div className="home-posts">
			<div className="home-post-title">
				<h3>Search by Tag</h3>
			</div>

			<div className="">
				<div className="row">
					{tagBlog?.map((item, index) => {
						return (
							<div
								key={item._id}
								className="posts-item col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-5 mb-2"
							>
								<div
									onClick={() => navigate(`/blog/${item._id}`)}
									className="link-recent"
								>
									<div className="posts-item-overlay">
										<img src={item.imageFile} alt="" />
									</div>
									<div className="posts-item-content">
										<h2>
											<div>{item.title}</div>
										</h2>
										<div className="posts-item-info">
											<div className="item-info-box">
												<span>{item.creator}</span>
											</div>
											<div className="item-info-box">
												<span>{item.createdAt}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default BlogTag
