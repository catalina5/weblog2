import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
export const Wrapper = styled.div`
	display: flex;
	img {
		height: 300px;
		cursor: pointer;
	}
`
const SearchBlog = () => {
	const { blogs } = useSelector(state => ({
		...state.blog
	}))
	const navigate = useNavigate()

	return (
		<Wrapper>
			{blogs?.map((item, index) => {
				return (
					<div
						key={item._id}
						className="posts-item col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5 mb-2"
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
		</Wrapper>
	)
}

export default SearchBlog
