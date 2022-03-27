import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'
import styled from 'styled-components'

export const Wrapped = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(
		to right,
		rgba(255, 255, 0, 0.5),
		rgba(0, 0, 255, 0.5)
	);
`
export const FormTitle = styled.div`
	font-size: 4rem;
	font-weight: 600;
	margin-bottom: 20px;
`
export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	border-radius: 10px;
	padding: 30px 20px;
`
export const InputText = styled.input`
	border-radius: 30px;
	margin-bottom: 20px;
	padding: 15px;
	width: 300px;
	border: none;
	box-shadow: 0px 0px 0px 2px #cfcfd8;
	transition: all 0.4s linear;
	&:focus {
		box-shadow: 0px 0px 0px 2px #b374ee;
	}
`
export const InputPassword = styled.input`
	border-radius: 30px;
	margin-bottom: 20px;
	padding: 15px;
	width: 300px;
	border: none;
	box-shadow: 0px 0px 0px 2px #cfcfd8;
	transition: all 0.4s linear;
	&:focus {
		box-shadow: 0px 0px 0px 2px #b374ee;
	}
`
export const Button = styled.button`
	width: 100%;
	padding: 15px;
	border-radius: 30px;
	font-size: 20px;
	background-color: #b374ee;
	border: none;
	color: #fff;
	margin-bottom: 20px;
	transition: all 0.4s linear;
	&:hover {
		opacity: 0.8;
	}
`
export const LinkRegister = styled.div`
	& > * {
		color: #b374ee;
		margin-left: 10px;
	}
`

const Login = () => {
	return (
		<Wrapped>
			<Form>
				<FormTitle>Login</FormTitle>
				<InputText placeholder="Email" type="text"></InputText>
				<InputPassword placeholder="Password" type="password"></InputPassword>
				<Button>Login</Button>
				<LinkRegister>
					Don't have an account?<Link to={path.register}>Register Here</Link>
				</LinkRegister>
			</Form>
		</Wrapped>
	)
}

export default Login
