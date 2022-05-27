import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import { setLogout } from 'src/redux/features/authSlice'
import '../header/header.css'

export default function Header() {
	const { user } = useSelector(state => ({ ...state.auth }))

	const [online, setOnline] = useState(null)
	useEffect(() => {
		setOnline(JSON.parse(localStorage.getItem('profile')))
	}, [user])
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(setLogout())
	}
	return (
		<div className="header-container">
			<nav className="container navbar navbar-expand-lg ">
				<Link className="navbar-brand" to="/">
					<div className="contact-logo">
						<h1>OCE</h1>
						<h1>AN</h1>
					</div>
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  ml-auto">
						<li className=" nav-item active">
							<Link to={path.home} className="header-detail-text nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="header-detail-text nav-link "
								to={path.create}
								id="navbarDropdown"
								role="button"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Create
							</Link>
						</li>
						<li className="header-detail-text nav-item dropdown">
							<Link
								className="header-detail-text nav-link "
								to={path.about}
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								About
							</Link>
						</li>
						{online ? (
							<>
								<li className=" nav-item active">
									<span
										className="header-detail-text nav-link"
										style={{
											color: 'black',
											fontWeight: 'bold',
											fontSize: '16px'
										}}
									>
										Tài khoản: {online.result.name}
									</span>
								</li>
								<li className=" nav-item active">
									<span
										className="header-detail-text nav-link"
										style={{
											cursor: 'pointer',
											color: 'black',
											fontWeight: 'bold',
											fontSize: '16px'
										}}
										onClick={handleLogout}
									>
										Logout
									</span>
								</li>
							</>
						) : (
							<li className=" nav-item active">
								<Link to="/login" className="header-detail-text nav-link">
									Login
								</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
	)
}
