import React from 'react'
import Banner from '../../../assets/banner.png'
import Ring from '../../../assets/ring.png'
import { FaComputer } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiSpeakLine } from "react-icons/ri";
import { PiBagBold } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";

const index = () => {
  return (
    <div>
      <div className='banner'>

        <div className='banner2'>

          <div className='title3'>
            <h1>up your <span>Skills<br /></span> to <span>Advance</span> your<br /> <span>Career</span> path</h1>
            <p>Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.</p>
            <button className='button1'>Get Started</button><button className='button2'>Start Free Trial</button>

            <div className='icon1'>
              <IconContext.Provider value={{ className: "speaking" }}>
                <RiSpeakLine />
              </IconContext.Provider>
              <p>Public Speaking</p>
              <IconContext.Provider value={{ className: "bag" }}>
                <PiBagBold />
              </IconContext.Provider>
              <p>Career-Oriented</p>
              <IconContext.Provider value={{ className: "bulb" }}>
                <HiOutlineLightBulb />
              </IconContext.Provider>
              <p>Creative Thinking</p>
            </div>

          </div>
          <div className='banner3'>
            <img src={Banner} alt="" />

          </div>

          <div>

            <div className='card1'>
              <img src={Ring} alt="" />
              <h3>5K+</h3>
              <p>Online Courses</p>
            </div>

            <div id='card2'>
              <div id='icon'>
                <IconContext.Provider value={{ className: "computer" }}>
                  <FaComputer />
                </IconContext.Provider>
                <h3>5K+</h3>
                <p>Online Courses</p>
              </div>
            </div>

            <div id='card3'>
              <div id='icon'>
                <IconContext.Provider value={{ className: "tutor" }}>
                  <BsPersonWorkspace />
                </IconContext.Provider>
                <h3>5K+</h3>
                <p>Online Courses</p>
              </div>
            </div>



          </div>

        </div>

        <div>collab</div>

      </div>
    </div>
  )
}

export default index
