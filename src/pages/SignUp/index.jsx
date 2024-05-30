import React from 'react'

const SignUp = () => {
  return (
    <div>

      <div className='title2'>
        <h1 className='h1'>
          <u>
            Sign Up
          </u>
        </h1>
      </div>



      <div className='searchbox1'>

        <div className='sea'>
          <input className="input4" type="text" placeholder='First Name' />



          <input className="input5" type="text" placeholder='Last Name' />



          <input className="input6" type="text" placeholder='Email Address' />


          <input className="input7" type="text" placeholder='Password' />

          <p>Already a member?<span> Log In</span></p>

          <button>Sign Up</button>

        </div>



      </div>



    </div>


  )
}

export default SignUp