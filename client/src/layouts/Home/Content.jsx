import React from 'react'
import '../../assets/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../assets/styles/content.css'
import Image1 from '../../assets/img/slider1.jpg'

const Content = () => {
	return (
		<div>
			<nav className="breadcrumb">
				<a href="https://magsita-omtemplates.blogspot.com/">Home</a>
				<i className="fa fa-angle-right" aria-hidden="true"></i>
				<a
					className="b-label"
					href="https://magsita-omtemplates.blogspot.com/search/label/Fashion?&amp;max-results=5"
				>
					Fashion
				</a>
				<i className="fa fa-angle-right" aria-hidden="true"></i>
				<span className="current">Elegant woman in front of a waterfall</span>
			</nav>
			<h1 className="post-title">Elegant woman in front of a waterfall</h1>
			<div className="post-meta">
				<span className="post-author">
					<a
						href="https://www.blogger.com/profile/16198139972321043555"
						target="_blank"
						title="Sora Blogging Tips"
					>
						<i className="fa fa-user" aria-hidden="true"></i>
						Sora Blogging Tips
					</a>
				</span>

				<span
					className="post-date published"
					datetime="2017-03-17T00:59:00-07:00"
				>
					<i className="fa fa-clock-o" aria-hidden="true"></i>
					March 17, 2017
				</span>
			</div>
			<div className="post-body post-content">
				<div className="post-body-list">
					<img src={Image1} className="post-body_img" />
				</div>
				<div className="post-body-list">
					<span className="list-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book
					</span>
				</div>
				<div className="post-body-list">
					<div class="list-text-boder">
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</div>
				</div>
				<div className="post-body-list">
					<span className="list-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book
					</span>
				</div>
				<div className="post-body-list">
					<h2 className="post-body-list_heading">Heading</h2>
					<h3 className="post-body-list_heading">Heading</h3>
					<h4 className="post-body-list_heading">Heading</h4>
					<h5 className="post-body-list_heading">Heading</h5>
					<h6 className="post-body-list_heading">Heading</h6>
				</div>
				<ul className="post-body-list">
					<li className="post-content-item pading-content">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
						Lorem Ipsum has been the industry's
					</li>
					<li className="post-content-item pading-content">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
						The generated Lorem Ipsum is therefore always
					</li>
					<li className="post-content-item pading-content">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
						Making this the first true generator
					</li>
				</ul>

				<div className="post-body-list">
					<span className="list-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book
					</span>
				</div>
				<div className="post-body-list">
					<iframe
						width="100%"
						height="315"
						src="https://www.youtube.com/embed/G3M5deXo7aQ"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="post-body-list">
					<div className="post-labels">
						<span>Tags</span>
						<div className="label-head Label">
							<a
								className="label-link"
								href="https://magsita-omtemplates.blogspot.com/search/label/Fashion?&amp;max-results=5"
								rel="tag"
							>
								Fashion
							</a>
						</div>
					</div>
				</div>
				<div className="post-body-list">
					<ul className="post-body-list_item">
						<li className="fb">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</li>
						<li className="tw">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</li>
						<li className="priter">
							<i class="fa fa-pinterest-p" aria-hidden="true"></i>
						</li>
						<li className="in">
							<i class="fa fa-linkedin" aria-hidden="true"></i>
						</li>
						<li className="phone">
							<i class="fa fa-phone" aria-hidden="true"></i>
						</li>
						<li className="email">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Content
