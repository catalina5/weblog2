import React, { useEffect } from 'react'
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
// import img1 from '../../../../../assets/img/detail/img_detail.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getBlog } from 'src/redux/features/blogSlice'
import moment from 'moment'

export const Navdetail_trend = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { blog } = useSelector(state => ({ ...state.blog }))

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
			<div className="row mt-4">
				<h1>{blog.title}</h1>
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
			{/* <div className="heading-detail">
				<h1 className="mt-3">This is heading 1</h1>
				<h2 className="mt-3">This is heading 2</h2>
				<h2 className="mt-3">This is heading 3</h2>
				<h3 className="mt-3">This is heading 4</h3>
				<h4 className="mt-3">This is heading 5</h4>
				<h5 className="mt-3">This is heading 6</h5>
			</div> */}
			<div className="mt-4 btn-detail">
				<button type="button" className="mr-2 btn btn-secondary">
					Tags
				</button>
				<button type="button" className="mr-2 btn btn-info">
					Music
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
