import React, { useEffect, useState } from 'react'
import './Navdetail_trend.css'
import {
	FiChevronRight,
	FiFacebook,
	FiTwitter,
	FiLinkedin,
	FiWatch,
	FiSend,
	FiVoicemail
} from 'react-icons/fi'
import { BiFemale, BiTime } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteBlog, getBlog } from 'src/redux/features/blogSlice'
import moment from 'moment'

export const NavdetailTrend = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { blog } = useSelector(state => ({ ...state.blog }))
	const [visible, setVisible] = useState(true)
	const handleRemoveChoose = () => {
		setVisible(!visible)
	}
	const navigate = useNavigate()
	const handleDeletePost = () => {
		if (id) {
			dispatch(deleteBlog({ id, navigate }))
		}
	}
	const handleUpdateBlog = () => {
		navigate(`/create/${id}`)
	}
	useEffect(() => {
		if (id) {
			dispatch(getBlog(id))
		}
	}, [dispatch, id])
	return (
		<div className="mb-4">
			<div className="row mt-4 list-link">
				<Link to="/" className="nav-detail-link a">
					Home <FiChevronRight />
				</Link>
				<Link to="" className="nav-detail-link a">
					Grid camera style <FiChevronRight />
				</Link>
			</div>
			<div className="row mt-4 blog-title">
				<h1>{blog.title}</h1>
				<div className="wrapped-editor">
					<button onClick={handleUpdateBlog}>Sửa</button>
					<div className="delete-button" onClick={handleRemoveChoose}>
						<div>Xóa</div>
						<div className={`sure ${visible ? 'visible' : ''}`}>
							<span>Bạn có chắc muốn xóa?</span>
							<div className="sure__choose">
								<button onClick={handleDeletePost}>Yes</button>
								<button>No</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row border-bottom">
				<li className=" mr-4">
					<BiFemale />
					{blog.creator}
				</li>
				<li className=" mr-4">
					<BiTime />
					{moment(blog.createAt).fromNow()}
				</li>
			</div>
			<div className="mt-4">
				<img className="detail-img" src={blog.imageFile} alt="" />
				<li className="mt-4 justify-center">{blog.description}</li>
				<li className="mt-4 justify-center">{blog.description}</li>
				<li className="mt-4 justify-center">{blog.description}</li>
			</div>
			<div className="mt-4 btn-detail">
				<button type="button" className="mr-2 btn btn-secondary">
					{blog.tags}
				</button>
			</div>
			<div className="btn-infos mt-4">
				<button type="button" className="btn-infos-item mr-3 btn btn-primary">
					<FiFacebook />
				</button>
				<button type="button" className="btn-infos-item mr-3 btn btn-secondary">
					<FiTwitter />
				</button>
				<button type="button" className="btn-infos-item mr-3 btn btn-success">
					<FiSend />
				</button>
				<button type="button" className="btn-infos-item mr-3 btn btn-danger">
					<FiLinkedin />
				</button>
				<button type="button" className="btn-infos-item mr-3 btn btn-warning">
					<FiWatch />
				</button>
				<button type="button" className="btn-infos-item mr-3 btn btn-info">
					<FiVoicemail />
				</button>
			</div>
		</div>
	)
}
