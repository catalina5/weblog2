import '../../assets/styles/Contents.css'

const data = [
    {
        id: 1,
        img: "https://blogger.googleusercontent.com/img/a/AVvXsEiz29Q9Px49ULga09YtCVRw7lcL2hwV-DeGbWRlyKLHA37O2LaPeqdCDt-EA6bleEDypUgfphD61qSxV5YGe-5AVe1rX4O3O8LwLfgb8dzAVWnxDjOIkOhUegs93_okBr_AjbEgsLnF0cgwlBVaceG6_JnVOklpWNKHlGz0iKeI_7_apwcv4bN6yo5p=w94-h132-p-k-no-nu",
        title: "Elegant woman in front of a waterfall",
    },
    {
        id: 2,
        img: "https://blogger.googleusercontent.com/img/a/AVvXsEiytyDyfZ9Gwwx8g50zDi7sGzm4njoT0zy3DrCNai-IJqxYP7NcQQb9nmaAxhDXnLwWllVXdMSe161WPIttC8VFD3dScOlHYIJMXWUJluYZLL2G_kzjI3B7MhdDzBQZgcSidMU0fwU661wN09gz7J-tcnYgmLqZpwMOJI3X3Nx0-lbOJBsUjFT7eUZH=w94-h132-p-k-no-nu",
        title: "Fashion and beautiful backpack",
    },
    {
        id: 3,
        img: "https://blogger.googleusercontent.com/img/a/AVvXsEjrLHZK7EjxQcLrqCcxbAwy5v1YzzqYesyxYMJTn__4DDMUGOc4usJIwzGPWwqrUcZC0CozJBmVBmlRPZwlo6_zNrabax8Fip2T46UEjGE0rpWKjDlHlqj77XTGRgcB0I55eWyBMWAYo_bCX74HfQGADFpeX3nk5XClcvAKkm7ayn30-Io6K1PnrxFt=w94-h132-p-k-no-nu",
        title: "Elegant business man having a delicious cup of coffee",
    },
]




function Contents(props){
    return(
        <div>
            
            <h1>Popular Posts</h1>
            <div className='wrap'>
                <div className='post-content'>
                <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgVvOZkZ65S4fIjbDm0jXIDe3cyJuuFIqi1HbD4vTJoS3qcUhD_VZ27S-K4_gcVTJJBPBeqntDfHmYidYtPlbTWELWf7COAHXtOG6IZyyMgHPMK2i6uD80SRaUuZZrQljHuonJE8AKGlECdvv9Yrz1yEGQJqet7FSc-kKWWtR5Q4owIv50Ql7mXoNT3=w320-h440-p-k-no-nu" />
                    {/* <h5>Girl with cameram style</h5> */}
                </div>
                <div className='post-container'>
                    {
                        data.map((movie,index)=>(
                            <div key={index} className="post-item">
                                <img className= "post-container_img" src={movie.img} alt=""/>
                                <div className="title">{movie.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='font'>
                <h1 className='font-number'>
                    <h1 className='font-number-s1'>550</h1>
                    <h5>Articles Per Month</h5>
                    </h1>

                    <h1 className='font-number'>
                    <h1 className='font-number-s1'>54</h1>
                    <h5>Topic Covered</h5>
                    </h1>
                    <h1 className='font-number'>
                    <h1 className='font-number-s1'>12</h1>
                    <h5>Total Articles</h5>
                    </h1>
                    
               
                
            </div>
        </div>
    )
}
export default Contents;