import React, { useState } from 'react'
import '../../assets/styles/home_recent.css'
import { FaUser } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { Routes, Route , Link} from 'react-router-dom';
import data from 'src/data'

const Home_Posts = () => {
	const [moreElement, setMoreElement] = useState(6)
	const sliceData = data.homePost.slice(0, moreElement)

	const loadMore = () => {
		setMoreElement(moreElement + moreElement)
	}

	return (
		<div className="home-posts">
			<div className="home-post-title">
				<h3>Recent posts</h3>
			</div>

			<div className="">
				<div className="row">
					{sliceData.map((post, index) => {
						return (
							<div
								key={index}
								className="posts-item col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5 mb-2"
							>
								<Link to='/product/1'>
									<div className="posts-item-overlay">
										<img src={post.img} />
										<button>{post.category}</button>
									</div>
									<div className="posts-item-content">
										<h2>
											<a href="#">{post.title}</a>
										</h2>
										<div className="posts-item-info">
											<div className="item-info-box">
												<FaUser className="item-info-icon" />
												<span>Sora Blogging Tips</span>
											</div>
											<div className="item-info-box">
												<GoClock className="item-info-icon" />
												<span>January 22, 2022</span>
											</div>
										</div>
									</div>
								</Link>
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
