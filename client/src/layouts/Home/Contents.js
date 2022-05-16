import '../../assets/styles/Contents.css'
const data = [
	{
		id: 1,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiz29Q9Px49ULga09YtCVRw7lcL2hwV-DeGbWRlyKLHA37O2LaPeqdCDt-EA6bleEDypUgfphD61qSxV5YGe-5AVe1rX4O3O8LwLfgb8dzAVWnxDjOIkOhUegs93_okBr_AjbEgsLnF0cgwlBVaceG6_JnVOklpWNKHlGz0iKeI_7_apwcv4bN6yo5p=w94-h132-p-k-no-nu',
		title: 'Elegant woman in front of a waterfall'
	},
	{
		id: 2,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiytyDyfZ9Gwwx8g50zDi7sGzm4njoT0zy3DrCNai-IJqxYP7NcQQb9nmaAxhDXnLwWllVXdMSe161WPIttC8VFD3dScOlHYIJMXWUJluYZLL2G_kzjI3B7MhdDzBQZgcSidMU0fwU661wN09gz7J-tcnYgmLqZpwMOJI3X3Nx0-lbOJBsUjFT7eUZH=w94-h132-p-k-no-nu',
		title: 'Fashion and beautiful backpack'
	},
	{
		id: 3,
		img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjrLHZK7EjxQcLrqCcxbAwy5v1YzzqYesyxYMJTn__4DDMUGOc4usJIwzGPWwqrUcZC0CozJBmVBmlRPZwlo6_zNrabax8Fip2T46UEjGE0rpWKjDlHlqj77XTGRgcB0I55eWyBMWAYo_bCX74HfQGADFpeX3nk5XClcvAKkm7ayn30-Io6K1PnrxFt=w94-h132-p-k-no-nu',
		title: 'Elegant business man having a delicious cup of coffee'
	}
]

function Contents(props) {
	return (
		<div className="mt-4 contents_container_all">
			<h1 className="slider-heading mt-4">Popular Posts</h1>
			<div className="wrap mt-4">
				{data &&
					data.slice(0, 1).map((item, i) => (
						<div className="post-content">
							<img className="post-content__img" src={item.img} alt="" />
							<div className="post-content__overlay"></div>
							<div className="post-content__title">{item.title}</div>
						</div>
					))}
				<div className="post-container">
					{data.map((movie, index) => (
						<div key={index} className="post-item">
							<img className="post-container_img" src={movie.img} />
							<p className="title">{movie.title}</p>
						</div>
					))}
				</div>
			</div>
			<div className="font_container">
				<div className="font_container_list">
					<h1 className="font-number">
						<h1 className="font-number-s1">550</h1>
						<h5>Articles Per Month</h5>
					</h1>

					<h1 className="font-number">
						<h1 className="font-number-s1">54</h1>
						<h5>Topic Covered</h5>
					</h1>
					<h1 className="font-number">
						<h1 className="font-number-s1">12</h1>
						<h5>Total Articles</h5>
					</h1>
				</div>
			</div>
		</div>
	)
}
export default Contents
