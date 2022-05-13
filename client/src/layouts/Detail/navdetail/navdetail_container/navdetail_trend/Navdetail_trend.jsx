import React from 'react'
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
import img1 from '../../../../../assets/img/detail/img_detail.jpg'

export const Navdetail_trend = () => {
	return (
		<div className="mb-4">
			<div className="row mt-4">
				<a className="nav-detail-link a">
					Home <FiChevronRight />
				</a>
				<a className="nav-detail-link a">
					Music <FiChevronRight />
				</a>
				<a className="nav-detail-link a">
					Grid camera style <FiChevronRight />
				</a>
			</div>
			<div className="row mt-4">
				<h1>Girl with camera style</h1>
			</div>
			<div className="row border-bottom">
				<li className=" mr-4">
					<BiFemale />
					SORA BLOGGING TIPS
				</li>
				<li className=" mr-4">
					<BiTime />
					JANUARY 22, 2022
				</li>
			</div>
			<div className="mt-4">
				<img className="detail-img" src={img1} alt="" />
				<li className="mt-4 justify-center">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English.
				</li>
				<li className="mt-4 justify-center">
					It uses a dictionary of over 200 Latin words, combined with a handful
					of model sentence structures, to generate Lorem Ipsum which looks
					reasonable. The generated Lorem Ipsum is therefore always free from
					repetition, injected humour, or non-characteristic words etc.
				</li>
				<li className="mt-4 justify-center">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
					If you are going to use a passage of Lorem Ipsum, you need to be sure
					there isn't anything embarrassing hidden in the middle of text.
				</li>
			</div>
			<div className="heading-detail">
				<h1 className="mt-3">This is heading 1</h1>
				<h2 className="mt-3">This is heading 2</h2>
				<h2 className="mt-3">This is heading 3</h2>
				<h3 className="mt-3">This is heading 4</h3>
				<h4 className="mt-3">This is heading 5</h4>
				<h5 className="mt-3">This is heading 6</h5>
			</div>
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
