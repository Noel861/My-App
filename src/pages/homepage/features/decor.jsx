import React from 'react'
import Object from '../../../assets/OBJECTS.png'
import hearts from '../../../assets/hearts 1.png'
import jigsaw from '../../../assets/jigsaw 1.png'

const Decor = () => {
  return (
    <div className='decor'>
      <div>
        <img src={Object} alt="" />
      </div>
      <div className='Title'>
        <h1>Premium <span>Learning  </span> <br />
          Experience</h1>
        <div>
          <div className='heart'>

            <div className='img'>
              <img src={hearts} alt='' />
            </div>

            <div className='text'>
              <h4 className='h4'>Easily Accessible</h4>
              <p>Learning Will fell Very Comfortable With Courslab.</p>
            </div>

          </div>
          <div className='jigsaw'>

            <div className='img'>
              <img src={jigsaw} alt='' />
            </div>

            <div className='text'>
              <h4>Fun learning Experience</h4>
              <p>Learning Will fell Very Comfortable With Courslab.</p>
            </div>

          </div>
        </div>

      </div>



    </div>
  )
}

export default Decor