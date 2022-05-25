import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createBlog, editBlog } from 'src/redux/features/blogSlice'

export const Body = styled.div`
	padding-top: 20px;
	width: 100%;
	height: 200vh;
	background-image: linear-gradient(to right bottom, #2cccff, #f62682);
`
export const FormWrapper = styled.div`
	margin: auto;
	width: 500px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 15px 25px;
	background-color: white;
	border-radius: 10px;
`
export const FormTitle = styled.h1`
	text-align: center;
	font-size: 30px;
	font-weight: bold;
`

export const InputWrapper = styled.div`
	margin-bottom: 20px;
	.title {
		color: #6a5af9;
		text-align: center;
		font-size: 20px;
		font-weight: 500;
	}
	& > * {
		color: #6a5af9;
	}
	input,
	textarea {
		width: 100%;
		padding: 15px 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
		&:focus {
			border: 1px solid #2cccff;
		}
	}
`
export const FormReward = styled.div`
	background-color: #f62682;
	position: absolute;
	left: 0;
	cursor: pointer;
	padding: 5px 10px;
	border-bottom-right-radius: 15px;
	border-top-right-radius: 15px;
	color: white;
`
export const WrapTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	justify-content: center;
	gap: 20px;
	position: relative;
`
export const Button = styled.button`
	width: 100%;
	padding: 10px;
	font-size: 20px;
	background-color: #2cccff;
	border-radius: 5px;
	border: none;
	color: white;
	&:hover {
		box-shadow: 2px -2px 3px #ccc;
		transition: all 0.2s linear;
		transform: translate(-2px, 2px);
		color: #f62682;
	}
`

const Creator = () => {
	const { id } = useParams()

	const initialState = {
		title: '',
		description: '',
		tags: [],
		creator: ''
	}
	const { blog } = useSelector(state => state.blog)
	console.log(blog)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [blogData, setBlogData] = useState(initialState)
	const { title, description, tags, creator } = blogData
	useEffect(() => {
		if (id) {
			setBlogData(blog)
		}
		if (!id) {
			setBlogData(initialState)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [blog, id])
	const handleInputChange = e => {
		const { name, value } = e.target
		setBlogData({ ...blogData, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (title && description && tags && creator) {
			const updatedBlogData = { ...blogData }
			if (!id) {
				dispatch(createBlog({ updatedBlogData, navigate }))
			}
			if (id) {
				dispatch(editBlog({ updatedBlogData, id, navigate }))
			}
		}
	}

	return (
		<Body>
			<FormWrapper>
				<WrapTitle>
					<FormReward onClick={() => navigate(-1)}>Back</FormReward>
					<FormTitle>{!id ? 'Create post' : 'Edit post'}</FormTitle>
				</WrapTitle>
				<form onSubmit={handleSubmit}>
					<InputWrapper>
						<div className="title">Title</div>
						<input
							name="title"
							value={title}
							onChange={handleInputChange}
							type="text"
						/>
					</InputWrapper>
					<InputWrapper>
						<div className="title">Description</div>
						<textarea
							name="description"
							value={description}
							onChange={handleInputChange}
							id=""
							cols="30"
							rows="10"
						></textarea>
					</InputWrapper>
					<InputWrapper>
						<div className="title">Tag</div>
						<input
							type="text"
							name="tags"
							value={tags}
							onChange={handleInputChange}
						/>
					</InputWrapper>
					<InputWrapper>
						<div className="title">Creator</div>
						<input
							type="text"
							name="creator"
							value={creator}
							onChange={handleInputChange}
						/>
					</InputWrapper>
					<InputWrapper>
						<FileBase
							type="file"
							multiple={false}
							onDone={({ base64 }) =>
								setBlogData({ ...blogData, imageFile: base64 })
							}
						/>
					</InputWrapper>
					<Button type="submit">Submit</Button>
				</form>
			</FormWrapper>
		</Body>
	)
}

export default Creator
