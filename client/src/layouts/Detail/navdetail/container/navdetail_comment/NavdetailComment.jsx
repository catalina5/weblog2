import React, { useEffect } from 'react'
import './post_comment.css'
import moment from 'moment'
import { GoClock } from 'react-icons/go'
import { FaRegCommentDots } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from 'src/redux/features/blogSlice'
import { useNavigate } from 'react-router-dom'

export const NavdetailComment = () => {
	const { blogs } = useSelector(state => state.blog)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
	const navigate = useNavigate()
	return (
		<div className="wrap-post-comment">
			<div className="post-comment">
				<div className="post-comment-btn">
					<h3>YOU MAY LIKE THESE POSTS</h3>
				</div>
				<div className="row mt-5 mb-5">
					{blogs &&
						blogs.slice(1, 4).map(post => {
							return (
								<div
									onClick={() => navigate(`/blog/${post._id}`)}
									key={post._id}
									className="post-box col-sm-12 col-md-6 col-lg-4 col-xl-4"
								>
									<div className="post-comment-item">
										<div className="post-item-overlay">
											<img src={post.imageFile} alt="" />
											<button>{post.tags}</button>
										</div>
										<h3 className="post-item-content">
											<div>{post.title}</div>
										</h3>
										<div className="post-date">
											<GoClock className="post-date-icon" />
											<span>{moment(post.createdAt).fromNow()}</span>
										</div>
									</div>
								</div>
							)
						})}
				</div>

				<div className="post-comment-btn">
					<h3>POSTS A COMMENT</h3>
				</div>

				<div className="wrap-comment">
					<h3>0 Comment</h3>
					<div className="comment-content">
						<FaRegCommentDots className="comment-icon" />
						<input placeholder="Enter your comment..." />
					</div>
				</div>
			</div>
		</div>
	)
}
