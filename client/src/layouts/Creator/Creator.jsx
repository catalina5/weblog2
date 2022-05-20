import React, { useState } from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createBlog } from 'src/redux/features/blogSlice'

export const FormWrapper = styled.div`
	margin: 15px auto;
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
	margin-bottom: 20px;
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

const initialState = {
	title: '',
	description: '',
	tags: [],
	creator: ''
}

const Creator = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [blogData, setBlogData] = useState(initialState)
	const { title, description, tags, creator } = blogData

	const handleInputChange = e => {
		const { name, value } = e.target
		setBlogData({ ...blogData, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (title && description && tags && creator) {
			dispatch(createBlog({ blogData, navigate }))
		}
	}

	return (
		<FormWrapper>
			<FormTitle>Create Post</FormTitle>
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
	)
}

export default Creator
