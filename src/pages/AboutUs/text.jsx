import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Pic1 from '../../assets/pic1.png'
import Pic2 from '../../assets/pic2.png'
import Pic3 from '../../assets/sect.png'


const AboutUs = () => {
  return (
    <div>

      <div className='text'>
        <div className='text1'>
          <h1>About us</h1>
          <h3>
            <span>WEEKEND UX </span>
            providing the best opportunities to the students around the glob.
          </h3>
          <small>Weekend UX, is a UI/UX Design Academy in Delhi involved in User <br /> Experience and User Interface Training and Consulting. It was started in <br /> 2023 and passionate towards User Interface Design/ User Experience <br /> Design, Human Computer Interaction Design. Humanoid is gushing towards <br /> competence to acquire knowledge and have a wide understanding towards <br /> the sphere through the foremost courses in the area of UI/UX Design, by <br /> strengthening up your skills, for your golden future</small>
          <button>
            Join Us <GoArrowRight className='icon3' />
          </button>
        </div>

        <div className='picture'>

          <img className='pic1' src={Pic1} alt="" />
          <img className='pic2' src={Pic2} alt="" />

        </div>



        <div className='picture2'>

          <img className='pic1' src={Pic3} alt="" />

        </div>



        <div className='text2'>
          <h4 className='small'>Features</h4>
          <h1 className='h1'>We are always working to provide you best of the features in all aspects.
          </h1>
          <small>At WEEKENDUX the chief determination is to clear the minds of our <br /> students about their goals, while making them consistent in their ambitions <br /> and pushing them to be confident for their journey towards the course <br /> of time.</small>
          <small>You will find every little thing on the internet in just a click of hand, but here <br /> we admire that without knowledge and practice the internet may even also <br /> fail you in your life.
          </small>
          <button>
            Learn More <GoArrowRight className='icon3' />
          </button>
        </div>
      </div>

      <div>

        <div className='t'>
          <h4>Our Benefits</h4>
          <h1>By Joining WEEKENS UX Platform,<br /> One Can Avail a Lot Of Benefits.</h1>
          <p>Install our top-rated dropshipping app to your e-commerce site and get<br /> access to US Suppliers, AliExpress vendors, and the best.</p>
        </div>

        <div className='grid'>

          <div className='c'>

            <h1>
              01
            </h1>
            <h3>Standardization</h3>
            <p>When working in a global workplace, it’s <br /> often difficult to gauge learners’ training <br /> experiences, which are ... <span>Read More</span></p>

          </div>

          <div className='c'>

            <h1>
              02
            </h1>
            <h3>Reduced Costs</h3>
            <p>With Weekend UX, there’s no cost to <br /> reproduce materials and, thanks to mobile <br /> learning and microlearning ... <span>Read More</span></p>

          </div>

          <div className='c'>

            <h1>
              03
            </h1>
            <h3>More Cutomization</h3>
            <p>ust like learners aren’t one-size-fits-all,<br /> learning is not a one-size-fits-all<br /> experience. By using different ... <span>Read More</span></p>

          </div>

          <div className='c'>

            <h1>
              04
            </h1>
            <h3>Afordable Pricing</h3>
            <p>With Weekend UX, there’s no cost to <br /> reproduce materials and, thanks to mobile <br /> learning and microlearning ... <span>Read More</span></p>

          </div>

          <div className='c'>

            <h1>
              05
            </h1>
            <h3>Learner Satisfaction</h3>
            <p>If you really want students to retain what <br /> they learn, you’ll need to aim for high <br /> satisfaction rates. Bad ... <span>Read More</span></p>

          </div>

          <div className='c'>

            <h1>
              06
            </h1>
            <h3>Multimedia Materials</h3>
            <p>One of the main reasons why custom <br /> eLearning is effective is that it’s the perfect <br /> delivery method for ... <span>Read More</span></p>

          </div>





        </div>



      </div>

    </div>
  )
}

export default AboutUs