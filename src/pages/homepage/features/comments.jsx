import React from 'react'
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import Pfp1 from '../../../assets/pfp1.png'
import Pfp2 from '../../../assets/pfp2.png'
import Pfp3 from '../../../assets/pfp3.png'

const comments = () => (
  <div className='comments'>

    <div className='title'>
      <h1>What student’s say</h1>
      <p>Lorem Ipsum is simply dummy text of the printing.</p>
    </div>

    <div className='cards'>
      <div>

        <div className='img1'>
          <p className='p1'>“Teachings of the great explore of truth,
            the master-builder of human happiness.
            no one rejects,dislikes, or avoids pleasure
            itself, pleasure itself”</p>
          <img className='img4' src={Pfp1}></img>
          <h4>Finlay Kirk</h4>
          <p className='p'>Web Developer</p>
        </div>

      </div>

      <div className='img1'>
        <p className='p1'>“Complete account of the system and
          expound the actual Contrary to popular
          belief, Lorem Ipsum is not simply
          random text. It has roots”</p>
        <img className='img3' src={Pfp2}></img>
        <h4 className='name'>Dannette P. Cervantes</h4>
        <p className='p'>Web Design</p>
      </div>
      <div className='img1'>
        <p className='p1'>“There are many variations of passages
          of Lorem Ipsum available, but the majority
          have suffered alteration in some form,
          by injected humour”</p>
        <img className='img2' src={Pfp3}></img>
        <h4>Clara R. Altman</h4>
        <p className='p'>UI&UX Design</p>
      </div>
    </div>
  </div>
)

export default comments