import React, { useEffect, useState } from 'react'
import { path } from 'src/constants/path'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/features/authSlice'
import { toast } from 'react-toastify'

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
const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
}
const Register = () => {
	const { error } = useSelector(state => ({ ...state.auth }))
	const [formValue, setFormValue] = useState(initialState)
	const { email, password, firstName, lastName, confirmPassword } = formValue
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		error && toast.error(error)
	}, [error])

	const handleSubmit = e => {
		e.preventDefault()
		if (password !== confirmPassword) {
			return toast.error('Password should match')
		}
		if (email && password && firstName && lastName && confirmPassword) {
			dispatch(register({ formValue, navigate, toast }))
		}
	}
	const onInputChange = e => {
		let { name, value } = e.target
		setFormValue({ ...formValue, [name]: value })
	}
	return (
		<Wrapped>
			<Form onSubmit={handleSubmit}>
				<FormTitle>Register</FormTitle>
				<InputText
					label="First Name"
					name="firstName"
					placeholder="First Name"
					type="text"
					value={firstName}
					onChange={onInputChange}
				></InputText>
				<InputText
					label="Last Name"
					name="lastName"
					placeholder="Last Name"
					type="text"
					value={lastName}
					onChange={onInputChange}
				></InputText>
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
				<InputPassword
					label="Confirm Password"
					type="password"
					value={confirmPassword}
					name="confirmPassword"
					onChange={onInputChange}
					placeholder="Confirm Password"
				></InputPassword>
				<Button type="submit">Register</Button>
				<LinkRegister>
					Have an account?<Link to={path.login}>Login Here</Link>
				</LinkRegister>
			</Form>
		</Wrapped>
	)
}

export default Register
