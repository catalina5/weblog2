import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBlogs } from 'src/redux/features/blogSlice'
import '../../assets/styles/Contents.css'

function Contents() {
	const { blogs } = useSelector(state => state.blog)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])
	return (
		<div className="mt-4 contents_container_all">
			<h1 className="slider-heading mt-4">Popular Posts</h1>
			<div className="wrap mt-4">
				{blogs &&
					blogs.slice(1, 2).map((item, i) => (
						<Link
							key={item._id}
							to={`blog/${item._id}`}
							className="post-content"
						>
							<img className="post-content__img" src={item.imageFile} alt="" />
							<div className="post-content__overlay"></div>
							<div className="post-content__title">{item.title}</div>
						</Link>
					))}
				<div className="post-container">
					{blogs &&
						blogs.slice(0, 3).map((item, index) => (
							<Link to={`blog/${item._id}`} key={index} className="post-item">
								<img
									className="post-container_img"
									src={item.imageFile}
									alt=""
								/>
								<p className="post-container_title">{item.title}</p>
							</Link>
						))}
				</div>
			</div>
			<div className="font_container">
				<div className="font_container_list">
					<div className="font-number">
						<h1 className="font-number-s1">550</h1>
						<h5>Articles Per Month</h5>
					</div>

					<div className="font-number">
						<h1 className="font-number-s1">54</h1>
						<h5>Topic Covered</h5>
					</div>
					<div className="font-number">
						<h1 className="font-number-s1">12</h1>
						<h5>Total Articles</h5>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Contents
