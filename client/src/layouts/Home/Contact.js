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
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<span
					className="contact-logo"
					style={{ fontSize: '50px', fontWeight: 'bold' }}
				>
					OCE
				</span>
				<span
					className="contact-logo"
					style={{ fontSize: '50px', fontWeight: 'bold', color: '#ccc' }}
				>
					AN
				</span>
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
				<span>By Catalina</span>
			</div>
		</div>
	)
}

export default Contact
