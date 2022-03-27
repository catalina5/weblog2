import React from 'react';
import '../../assets/styles/contact.css'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-logo'>
                <img src='https://1.bp.blogspot.com/-BwsE3vP7gX4/Ye6mJeD1SdI/AAAAAAAAKJk/Mnrn1zeELXMIcBr0j8o1dYd5Z6yZbGyuwCNcBGAsYHQ/s1600/output-onlinepngtools_180x60.png' />
            </div>
            <div className='contact-info'>
                <a href='#'><ImFacebook className='contact-info-icon' /></a>
                <a href='#'><AiOutlineTwitter className='contact-info-icon' /></a>
                <a href='#'><FaInstagram className='contact-info-icon' /></a>
                <a href='#'><BsPinterest className='contact-info-icon' /></a>
            </div>
            <div className='contact-content'>
                <span>Created with</span>
                <AiFillHeart className='contact-content-icon' />
                <span>By Omtemplates</span>
            </div>
        </div>
    );
};

export default Contact;