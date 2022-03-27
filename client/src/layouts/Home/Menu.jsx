import React from 'react'

import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import styled, { css } from 'styled-components'

const MenuWrapper = styled.div`
	z-index: 1000;
	position: relative;
	background-image: linear-gradient(to bottom, #2cccff, #f62682);
	width: 300px;
	padding: 0 15px;
	transition: transform 0.2s linear;
	${props =>
		!props.active &&
		css`
			transform: translateX(-100%);
		`}
	${props =>
		props.active &&
		css`
			transform: translateX(0);
		`}
`

const IconToogle = styled.button`
	position: absolute;
	right: 0;
	background-color: #a873ff;
	color: white;
	border: none;
	width: 35px;
	height: 35px;
	font-size: 20px;
	font-weight: bold;
`

const ListMenu = styled.ul`
	position: absolute;
	top: 30px;
	& > li:hover > a {
		color: #a873ff;
	}
`

const ItemMenu = styled.li`
	margin-bottom: 20px;
	& > a {
		color: black;
		transition: color 0.1s linear;
		text-decoration: none;
	}
`

const Menu = ({ isActive, setIsActive, color }) => {
	// const handleToggle = () => {
	// 	setActive(active => !active)
	// }
	// const [active, setActive] = useState(true)
	const handleToggle = () => {
		setIsActive(isActive => !isActive)
	}
	return (
		<MenuWrapper active={isActive}>
			<div style={{ backgroundColor: 'white' }}>
				{/* <IconToogle onClick={handleToggle}>X</IconToogle> */}
				<IconToogle onClick={handleToggle}>
					<i className="fa-solid fa-xmark"></i>
				</IconToogle>
				<ListMenu>
					<ItemMenu>
						<Link to={path.home}>HOME</Link>
					</ItemMenu>
					<ItemMenu>
						<Link to={path.login}>FEATURES</Link>
					</ItemMenu>
					<ItemMenu>
						<Link to="">DOCUMENTATION</Link>
					</ItemMenu>
					<ItemMenu>
						<Link to="">ABOUT ME</Link>
					</ItemMenu>
				</ListMenu>
			</div>
		</MenuWrapper>
	)
}

export default Menu
