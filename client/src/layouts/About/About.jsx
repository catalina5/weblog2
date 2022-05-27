import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
export const AboutWrapper = styled.div`
	margin: auto;
	width: 500px;
	height: 70vh;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	overflow: hidden;
	border-radius: 10px;
	background-color: white;
	padding-top: 20px;
	position: relative;
	.title {
		text-align: center;
		margin-bottom: 20px;
		text-transform: uppercase;
	}
	.group {
		padding: 20px;
		overflow-y: auto;
		height: 90%;
	}
	.people {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		display: flex;
		padding: 10px 15px;
		border-radius: 20px;
		margin-bottom: 10px;
		overflow: hidden;
		cursor: pointer;
		&:hover {
			background-color: #f62682;
			transition: all 0.4s linear;
			.name,
			.desc {
				color: white;
			}
		}
		.image {
			width: 100px;
			border-radius: 100rem;
			overflow: hidden;
			margin-right: 10px;
			img {
				width: 100px;
				height: 100px;
				object-fit: cover;
			}
		}
		.info {
			flex: 1;
			.name {
				font-weight: bold;
			}
		}
	}
`

export const Body = styled.div`
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(to right bottom, #2cccff, #f62682);
	padding-top: 50px;
`

const Member = [
	{
		id: 1,
		name: 'Nguyễn Thanh Bình',
		title: 'Là thành viên nhóm thôi nhưng gánh cả cái nhóm phế vật.',
		image:
			'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/273415415_1647967908878817_2650371853409031546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3_fZqcLTfi4AX9s3MU4&_nc_ht=scontent.fhan5-11.fna&oh=00_AT9YnWHfcyjQSYKfxn2dciKfuZqiwxfUXm81i5DxInmAJA&oe=6296698C'
	},
	{
		id: 2,
		name: 'Đoàn Cao Sơn',
		title: 'Là nhóm trưởng nhưng phế vcl.',
		image:
			'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/247149226_604671194222837_4772440525036975380_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TztSkYlyrxwAX_FamHr&_nc_oc=AQnd8RZHMXPiBwHKMbhkNF15R7hb-sjV1WDajDERL6r4xpZvq0RsZ0nA_2IIj5Oe0lFtg-L6XxHQ-NQttktdiP4Z&_nc_ht=scontent.fdad3-5.fna&oh=00_AT_kQgIP0OLO8ym02eD8osdcEDmr522rFkWTrqlp-Qvxfw&oe=6295BE81'
	},
	{
		id: 3,
		name: 'Vi Thanh Tú',
		title: 'Nhóm phó nhưng là con muỗi.',
		image:
			'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/271949324_1675305446142600_3881033422898946594_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=k04EN9UqCrsAX-vfv1l&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-vkd5pA7wWCU8j9IOWPqTDi7pAyF5x9g1c6mkv2Clyfw&oe=62966D87'
	},
	{
		id: 4,
		name: 'Đào Thanh Tùng',
		title: 'Thành viên phế vật, diễn viên.',
		image:
			'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/42758724_275075356664339_638924549043257344_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=SLdD8nDZrZAAX_QLGFX&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-ddvtjBtzTb_Iiqz4WLlxu6vzWjem1bLmkNN1HxEwOFg&oe=62B10B99'
	},
	{
		id: 5,
		name: 'Võ Quốc Tuy',
		title: 'Thành viên phế vật, diễn viên, éo biết cái gì.',
		image:
			'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/279226253_546118147188199_6764113346101603954_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=vZvCdgUcJx0AX-sPALQ&tn=Q2aIPoLNCrwl9Sn4&_nc_ht=scontent.fdad2-1.fna&oh=03_AVIY4pIYFObikRND2ZGA_hqiSGH6ojAWOvXlg_uGST0_ag&oe=62B1722F'
	},
	{
		id: 6,
		name: 'Đặng Quốc Huy',
		title: 'Chờ ngày nó học xong chắc hơi lâu.',
		image:
			'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/84167147_636924163546595_8755873127382122496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4mMbjcdFXvgAX8c2ooA&_nc_ht=scontent.fdad2-1.fna&oh=00_AT_A3LqOzs7m0jX65kGGbApQ0gv1JbVuHW1Cr1xfo8A7Jw&oe=62B0D2FB'
	}
]
export const FormReward = styled.div`
	background-color: #f62682;
	position: absolute;
	left: 0;
	cursor: pointer;
	padding: 5px 10px;
	border-bottom-right-radius: 15px;
	border-top-right-radius: 15px;
	color: white;
`
const About = () => {
	const navigate = useNavigate()
	return (
		<Body>
			<AboutWrapper>
				<FormReward onClick={() => navigate(-1)}>Back</FormReward>
				<h1 className="title">
					Thành viên nhóm <strong style={{ color: '#2cccff' }}>Ocean</strong>
				</h1>
				<div className="group">
					{Member.map((item, index) => (
						<div className="people" key={index}>
							<div className="image">
								<img src={item.image} alt="" />
							</div>
							<div className="info">
								<div className="name">{item.name}</div>
								<div className="desc">{item.title}</div>
							</div>
						</div>
					))}
				</div>
			</AboutWrapper>
		</Body>
	)
}

export default About
