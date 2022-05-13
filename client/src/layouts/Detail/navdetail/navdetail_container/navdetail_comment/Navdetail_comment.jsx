import React, { useState } from 'react'
import '../navdetail_comment/post_comment.css'
import data from 'src/data'

import { GoClock } from 'react-icons/go'
import { FaRegCommentDots } from 'react-icons/fa'

export const Navdetail_comment = () => {
	const dataPosts = data.homePost
	const newPosts = dataPosts.sort(() => Math.random() - 0.5).slice(0, 3)
	const postClone = [...newPosts]

	return (
		<div className="wrap-post-comment">
			<div className="post-comment">
				<div className="post-comment-btn">
					<h3>YOU MAY LIKE THESE POSTS</h3>
				</div>
				<div className="row mt-5 mb-5">
					{postClone.map(post => {
						return (
							<div
								key={post.id}
								className="post-box col-sm-12 col-md-6 col-lg-4 col-xl-4"
							>
								<div className="post-comment-item">
									<div className="post-item-overlay">
										<img src={post.img} />
										<button>{post.category}</button>
									</div>
									<h3 className="post-item-content">
										<a href="#">{post.title}</a>
									</h3>
									<div className="post-date">
										<GoClock className="post-date-icon" />
										<span>January 22, 2022</span>
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
