import React from 'react'
import '../../assets/styles/contact.css'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-logo">
				<img
					src="https://1.bp.blogspot.com/-BwsE3vP7gX4/Ye6mJeD1SdI/AAAAAAAAKJk/Mnrn1zeELXMIcBr0j8o1dYd5Z6yZbGyuwCNcBGAsYHQ/s1600/output-onlinepngtools_180x60.png"
					alt=""
				/>
			</div>
			<div className="contact-info">
				<Link to="/">
					<ImFacebook className="contact-info-icon" />
				</Link>
				<Link to="/">
					<AiOutlineTwitter className="contact-info-icon" />
				</Link>
				<Link to="/">
					<FaInstagram className="contact-info-icon" />
				</Link>
				<Link to="/">
					<BsPinterest className="contact-info-icon" />
				</Link>
			</div>
			<div className="contact-content">
				<span>Created with</span>
				<AiFillHeart className="contact-content-icon" />
				<span>By Omtemplates</span>
			</div>
		</div>
	)
}

export default Contact
