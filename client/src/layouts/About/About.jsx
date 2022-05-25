import React from 'react'

import styled from 'styled-components'
export const AboutWrapper = styled.div`
	margin: auto;
	width: 500px;
	height: 500px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	overflow: hidden;
	border-radius: 10px;
	background-color: white;
	padding-top: 20px;
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
			'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/273415415_1647967908878817_2650371853409031546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fjefwi_WKb0AX9E3bj7&_nc_ht=scontent.fdad2-1.fna&oh=00_AT-VxFiR1kbNcE2wIuvq3DbPJpq8L8B3Usw770dcqkafkQ&oe=62907ACC'
	},
	{
		id: 2,
		name: 'Đoàn Cao Sơn',
		title: 'Là nhóm trưởng nhưng phế vcl.',
		image:
			'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/247149226_604671194222837_4772440525036975380_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E7h6Y139nyEAX-jymDF&_nc_oc=AQlMFYRo8FrQdEaOulK4JFTNMVDzMmKziaFk418S_L21su58lU08XTYnIxxc1MJ1uGg&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-ZzouJvAKyv0hjpd-78U2ozJ3Pj49WOB5tQLyxK01JTA&oe=628FCFC1'
	},
	{
		id: 3,
		name: 'Vi Thanh Tú',
		title: 'Nhóm phó nhưng là con muỗi.',
		image:
			'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/271949324_1675305446142600_3881033422898946594_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iXucXqXWnVAAX-BinDf&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-BDtWmglb7pJBiIze5UCdvfj3tZmmtWaZDKczaCa4V8g&oe=62907EC7'
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
const About = () => {
	return (
		<Body>
			<AboutWrapper>
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
