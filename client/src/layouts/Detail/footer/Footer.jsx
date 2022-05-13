import React from 'react'
import './footer.css';
import { FiHeart } from "react-icons/fi";
const Footer = () => {
    return(
        <div className='footer mt-4'>
            <p>CREATED WITH <FiHeart className='footer_deatail_icon' style={{color:'red'}}/> BY <a href=''> OMTEMPLATES</a> </p>
            
        </div>
    )
}
export default Footer