import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import { setLogout } from 'src/redux/features/authSlice'
import logo from '../../../assets/img/detail/logo_header_detail.png'
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
		<div style={{ backgroundColor: '#333' }}>
			<nav className="container navbar navbar-expand-lg ">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="" />
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
									<div className="header-detail-text nav-link">
										Tài khoản: {online.result.name}
									</div>
								</li>
								<li className=" nav-item active">
									<div
										className="header-detail-text nav-link"
										style={{ cursor: 'pointer' }}
										onClick={handleLogout}
									>
										Logout
									</div>
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
