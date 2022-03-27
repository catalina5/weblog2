import React from 'react'
import '../../assets/styles/home.css'
import Home_Posts from './Home_Recent'
import PostsComent from 'src/components/PostsComent'

const Home = () => {
	return <div>
			<div className='Home container-fruid'>
					<div className='row justify-content-between'>
						<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 home_banner'></div>
							<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 home_content'>
								<div className='demo'></div>
								<br/>
								<Home_Posts/>
							</div>
					</div>
			</div>
			<br></br>
			<PostsComent />
	</div>
}

export default Home
