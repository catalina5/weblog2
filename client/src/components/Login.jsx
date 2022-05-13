import React, { useEffect, useState } from 'react'
import { path } from 'src/constants/path'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../redux/features/authSlice'
const initialState = {
	email: '',
	password: ''
}

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
	const [formValue, setFormValue] = useState(initialState)
	const { email, password } = formValue
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loading, error } = useSelector(state => ({ ...state.auth }))

	useEffect(() => {
		error && toast.error(error)
	}, [error])
	const handleSubmit = e => {
		e.preventDefault()
		if (email && password) {
			dispatch(login({ formValue, navigate, toast }))
		}
	}
	const onInputChange = e => {
		let { name, value } = e.target
		setFormValue({ ...formValue, [name]: value })
	}
	return (
		<Wrapped>
			<Form onSubmit={handleSubmit}>
				<FormTitle>Login</FormTitle>
				<InputText
					label="Email"
					value={email}
					name="email"
					onChange={onInputChange}
					placeholder="Email"
					type="email"
				></InputText>
				<InputPassword
					label="Password"
					type="password"
					value={password}
					name="password"
					onChange={onInputChange}
					placeholder="Password"
				></InputPassword>
				<Button type="submit">Login</Button>
				<LinkRegister>
					Don't have an account?<Link to={path.register}>Register Here</Link>
				</LinkRegister>
			</Form>
		</Wrapped>
	)
}

export default Login
