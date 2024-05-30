import React from 'react'
import { TiSocialYoutube } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Map from '../../assets/map.png';
import { FaTwitter } from "react-icons/fa6";

const services = () => {
  return (
    <div>

      <div className='title2'>
        <h1 className='h1'>
          <u>
            Contact Us
          </u>
        </h1>
      </div>

      <div className='grid2'>

        <div className='gri'>
          <p>Leave us a message</p>


          <input className="input1" type="text" placeholder='First_Name Last_Name' />



          <input className="input2" type="text" placeholder='Email Address' />



          <input className="input3" type="text" placeholder='Your Message' />


          <button>Send</button>
        </div>








        <div className='gri2'>

          <p className='p'>Weekend UX<br />
            B 37/3 Ground Floor Double<br /> StoryRamesh Nagar , Near Raja Garden<br /> Chowk.Delhi: 110015
          </p>

          <p>+91 9599272754<br />
          </p>

          <p className='p'>hello@info.com</p>

          <p className='icons'>
            <TiSocialYoutube />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </p>

          <img src={Map} alt="" />

        </div>



      </div>

    </div>
  )
}

export default services