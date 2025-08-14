import React from 'react'

const About = () => {
  return (
    <>
        <div className='about'>
            <div className="title card-hover">
                <h2>Our Mission</h2>
                <p>E-Shop Advisor is a data-driven recommendation tool that analyzes customer reviews and product feedback to predict the most suitable online store for a given purchase. Our goal is to help shoppers make informed decisions quickly, saving time and money.</p>
            </div>

            <div class="project card-hover">
                <h2>The Project</h2>
                <ul>
                    <li><b>Type:</b> Academic </li>
                    <li><b>Technology:</b> Python, Machine Learning, NLP, React</li>
                    <li><b>Objective:</b> Recommend the best e-commerce platform based on customer reviews and ratings.</li>
                </ul>
            </div>
            
            <div className="mentor card-hover">
                <h2>Our Mentor</h2>
                <p><b>Prof. Inadyuti Dutt</b><br/>
                Department of Computer Application<br/>
                B.P Poddar Institute of Management and Technology</p>
            </div>

            <div className="member card-hover">
                <h2>Our Members</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>Sagar Dey</td>
                        <td>.....</td>
                    </tr>
                    <tr>
                        <td>Subhankar Pal</td>
                        <td>.....</td>
                    </tr>
                    <tr>
                        <td>Sukumar Mondal</td>
                        <td>.....</td>
                    </tr>
                    <tr>
                        <td>Suraj Yadev</td>
                        <td>.....</td>
                    </tr>
                </table>
            </div>
            
        </div>
    </>
  )
}

export default About