import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/detail/logo_header_detail.png'
import '../header/header.css'

export default function Header() {
	return (
		<div style={{ backgroundColor: '#333' }}>
			<nav className="container navbar navbar-expand-lg ">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="" />
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  ml-auto">
						<li className=" nav-item active">
							<a className="header-detail-text nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="header-detail-text nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Features
							</a>

							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
						<li className="header-detail-text nav-item dropdown">
							<a
								className="header-detail-text nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Documentation
							</a>

							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
						<li className=" nav-item active">
							<a className="header-detail-text nav-link" href="#">
								Download This Template
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
