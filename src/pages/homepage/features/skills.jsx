import React from 'react'
import computer from '../../../assets/computer.png'
import exam from '../../../assets/exam.png'
import certification from '../../../assets/certification.png'

const Skills = () => {
    return (
        <div>

            <div className="page_width">
                <div className="skills_container">
                    <div className="item_grid">
                        <div className="img">
                            <img src={computer} alt="" />
                        </div>
                        <div className="content">
                            <h3>Learn The Latest Skills</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={exam} alt="" />
                        </div>
                        <div className="content">
                            <h3>Get Ready For a Career</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={certification} alt="" />
                        </div>
                        <div className="content">
                            <h3>Earn a Certificate</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills