import React from 'react'
import './Navdetail_history.css'

const data1 = [
	{
		id: 1,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiz29Q9Px49ULga09YtCVRw7lcL2hwV-DeGbWRlyKLHA37O2LaPeqdCDt-EA6bleEDypUgfphD61qSxV5YGe-5AVe1rX4O3O8LwLfgb8dzAVWnxDjOIkOhUegs93_okBr_AjbEgsLnF0cgwlBVaceG6_JnVOklpWNKHlGz0iKeI_7_apwcv4bN6yo5p=w94-h132-p-k-no-nu',
		title: 'Elegant woman in front of a waterfall',
		time: 'MARCH 17,2017'
	},
	{
		id: 2,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiytyDyfZ9Gwwx8g50zDi7sGzm4njoT0zy3DrCNai-IJqxYP7NcQQb9nmaAxhDXnLwWllVXdMSe161WPIttC8VFD3dScOlHYIJMXWUJluYZLL2G_kzjI3B7MhdDzBQZgcSidMU0fwU661wN09gz7J-tcnYgmLqZpwMOJI3X3Nx0-lbOJBsUjFT7eUZH=w94-h132-p-k-no-nu',
		title: 'Fashion and beautiful backpack',
		time: 'MARCH 19,2017'
	},
	{
		id: 3,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjrLHZK7EjxQcLrqCcxbAwy5v1YzzqYesyxYMJTn__4DDMUGOc4usJIwzGPWwqrUcZC0CozJBmVBmlRPZwlo6_zNrabax8Fip2T46UEjGE0rpWKjDlHlqj77XTGRgcB0I55eWyBMWAYo_bCX74HfQGADFpeX3nk5XClcvAKkm7ayn30-Io6K1PnrxFt=w94-h132-p-k-no-nu',
		title: 'Elegant business man having a delicious cup of coffee',
		time: 'MARCH 18,2016'
	}
]

const data2 = [
	{
		id: 1,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgVvOZkZ65S4fIjbDm0jXIDe3cyJuuFIqi1HbD4vTJoS3qcUhD_VZ27S-K4_gcVTJJBPBeqntDfHmYidYtPlbTWELWf7COAHXtOG6IZyyMgHPMK2i6uD80SRaUuZZrQljHuonJE8AKGlECdvv9Yrz1yEGQJqet7FSc-kKWWtR5Q4owIv50Ql7mXoNT3=w320-h440-p-k-no-nu',
		title: 'Elegant woman in front of a waterfall',
		time: 'JANUARY 22,2022'
	},
	{
		id: 2,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiz29Q9Px49ULga09YtCVRw7lcL2hwV-DeGbWRlyKLHA37O2LaPeqdCDt-EA6bleEDypUgfphD61qSxV5YGe-5AVe1rX4O3O8LwLfgb8dzAVWnxDjOIkOhUegs93_okBr_AjbEgsLnF0cgwlBVaceG6_JnVOklpWNKHlGz0iKeI_7_apwcv4bN6yo5p=w94-h132-p-k-no-nu',
		title: 'Fashion and beautiful backpack',
		time: 'MARCH 17,2017'
	},
	{
		id: 3,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiytyDyfZ9Gwwx8g50zDi7sGzm4njoT0zy3DrCNai-IJqxYP7NcQQb9nmaAxhDXnLwWllVXdMSe161WPIttC8VFD3dScOlHYIJMXWUJluYZLL2G_kzjI3B7MhdDzBQZgcSidMU0fwU661wN09gz7J-tcnYgmLqZpwMOJI3X3Nx0-lbOJBsUjFT7eUZH=w94-h132-p-k-no-nu',
		title: 'Elegant business man having a delicious cup of coffee',
		time: 'MARCH 17,2017'
	}
]

export const Navdetail_history = () => {
	return (
		<>
			<div className="huyoccho">
				<h1 className="mt-4">Random Posts</h1>
				<div className="">
					{data1 &&
						data1.map(item => (
							<ItemCon
								id={item.id}
								img={item.img}
								title={item.title}
								time={item.time}
							></ItemCon>
						))}
				</div>
			</div>
			<div>
				<h1 className="mt-4">Recent Posts</h1>
				<div className="">
					{data2 &&
						data2.map(item => (
							<ItemCon
								id={item.id}
								img={item.img}
								title={item.title}
								time={item.time}
							></ItemCon>
						))}
				</div>
			</div>
		</>
	)
}

export const ItemCon = ({ id, img, title, time }) => {
	return (
		<div key={id} className="post-item">
			<div className="post-item-img">
				<img src={img} alt="" />
			</div>
			<div className="content">
				{title}
				<div className="huy">
					<i className="fa-solid fa-clock"></i>
					{time}
				</div>
			</div>
		</div>
	)
}
