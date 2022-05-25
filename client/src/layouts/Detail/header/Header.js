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
		<div
			style={{
				backgroundColor: 'white',
				boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
				position: 'static'
			}}
		>
			<nav className="container navbar navbar-expand-lg ">
				<Link className="navbar-brand" to="/">
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<span
							className="contact-logo"
							style={{ fontSize: '50px', fontWeight: 'bold', color: '#2cccff' }}
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
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  ml-auto">
						<li className=" nav-item active">
							<Link
								to={path.home}
								className="header-detail-text nav-link"
								style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}
							>
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
								style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}
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
								style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}
							>
								About
							</Link>
						</li>
						{online ? (
							<>
								<li className=" nav-item active">
									<div
										className="header-detail-text nav-link"
										style={{
											color: 'black',
											fontSize: '20px',
											fontWeight: 'bold'
										}}
									>
										Tài khoản: {online.result.name}
									</div>
								</li>
								<li className=" nav-item active">
									<div
										className="header-detail-text nav-link"
										style={{
											cursor: 'pointer',
											color: 'black',
											fontSize: '20px',
											fontWeight: 'bold'
										}}
										onClick={handleLogout}
									>
										Logout
									</div>
								</li>
							</>
						) : (
							<li className=" nav-item active">
								<Link
									to="/login"
									className="header-detail-text nav-link"
									style={{
										color: 'black',
										fontSize: '20px',
										fontWeight: 'bold'
									}}
								>
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
