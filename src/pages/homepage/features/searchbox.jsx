import React from 'react'
import { Link } from 'react-router-dom'

const searchbox = () => {
  return (

    <div>

      <div className='search1'>
        <div className='search'>
          <h1>Subscribe to our newsletter</h1>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>

        <div className="search_box">
          <input type="text" placeholder='Email Address' className='search_box_input' />
          <button>Send</button>
        </div>
      </div>

    </div>




  )
}

export default searchbox