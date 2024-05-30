import React from 'react'
import Logo1 from '../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="page_width">
                <div className="inner_footer">
                    <div className='logo1'>
                        <img src={Logo1} alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
                    </div>
                    <div className='li'>
                        <div>
                            <h3>Company</h3>
                        </div>
                        <div className='list'>
                            <ul>

                                <li>About Us</li>
                                <li>How to work?</li>
                                <li>Popular Courses</li>
                                <li>Service</li>

                            </ul>
                        </div>
                    </div>

                    <div className='li'>
                        <div>
                            <h3>Courses</h3>
                        </div>
                        <div className='list'>
                            <ul>

                                <li>Categories</li>
                                <li>Offline Courses</li>
                                <li>Video Courses</li>

                            </ul>
                        </div>
                    </div>

                    <div className='li'>
                        <div>
                            <h3>Support</h3>
                        </div>
                        <div className='list'>
                            <ul>

                                <li>FAQ</li>
                                <li>Help Center</li>
                                <li>Career</li>
                                <li>Privacy</li>

                            </ul>
                        </div>
                    </div>

                    <div className='li'>
                        <div>
                            <h3>Contact info</h3>
                        </div>
                        <div className='list'>
                            <ul>

                                <li>+0913-705-3875</li>
                                <li>ElizabethJ@jourrapide.com</li>
                                <li>4808 Skinner Hollow Road
                                    Days Creek, OR 97429</li>

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer