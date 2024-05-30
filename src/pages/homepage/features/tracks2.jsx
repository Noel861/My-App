import React from 'react'
import Img1 from '../../../assets/img1.png'
import Img2 from '../../../assets/img2.png'
import Img3 from '../../../assets/img3.png'
import Insta from '../../../assets/insta.png'
import Linkdn from '../../../assets/linkdn.png'

const tracks2 = () => {
  return (

    <div>
      <div className='title'>
        <h1>
          Our Tracks
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      <div className="card2">

        <div className="image1">
          <img src={Img1} alt="" />
          <div className="main_heading">
            <h2>Matthew E. McNatt</h2>
            <p>Professor @George Brown College</p>
            <p>Ut enim ad minim veniam, quis nost exercitation
              ullamco laboris nisi ut allquip ex commodo.</p>
            <h4 className='h5'>Engineering physics</h4>
            <div className='icon'>
              <img className='insta' src={Insta} alt="" />
              <img className='linkdn' src={Linkdn} alt="" />
            </div>
          </div>

        </div>
        <div className="image2">
          <img src={Img2} alt="" />
          <div className="main_heading">
            <h2>Tracy D. Wright</h2>
            <p>Professor @George Brown College</p>
            <p>Ut enim ad minim veniam, quis nost exercitation
              ullamco laboris nisi ut allquip ex commodo.</p>
            <h4 className='h5'>Engineering physics</h4>
            <div className='icon'>
              <img className='insta' src={Insta} alt="" />
              <img className='linkdn' src={Linkdn} alt="" />
            </div>

          </div>

        </div>
        <div className="image3">
          <img src={Img3} alt="" />
          <div className="main_heading">
            <h2>Cynthia A. Nelson</h2>
            <p>Professor @George Brown College</p>
            <p>Ut enim ad minim veniam, quis nost exercitation
              ullamco laboris nisi ut allquip ex commodo.</p>
            <h4 className='h5'>Engineering physics</h4>
            <div className='icon'>
              <img className='insta' src={Insta} alt="" />
              <img className='linkdn' src={Linkdn} alt="" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default tracks2