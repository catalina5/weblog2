import React from 'react'
import './footer.css'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Footer = () => {
	return (
		<div className="footer mt-4">
			<p>
				CREATED WITH{' '}
				<FiHeart className="footer_deatail_icon" style={{ color: 'red' }} /> BY{' '}
				<Link to={''}> CATALINA</Link>
			</p>
		</div>
	)
}
export default Footer
