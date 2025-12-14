import React from 'react'

const About = () => {
  return (
    <>
        <div className='about'>
            <div className="title card-hover">
                <h2>Our Mission</h2>
                <p>The primary objective of this project is to develop a robust machine learning model that predicts the most suitable and trustworthy e-commerce platform for a given product based on structured user feedback such as star ratings, purchase behavior, and review metadata (e.g., helpfulness scores, timestamps). The system will analyze patterns in customer feedback collected from multiple online stores and use predictive algorithms to evaluate platform performance for specific products. By comparing factors like average ratings, consistency in feedback, and volume of positive responses, the model aims to recommend the best-performing platform. This project ultimately seeks to empower users to make more informed shopping decisions while improving transparency and reliability in the e-commerce environment.</p>
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
                H.O.D-Department of Computer Application<br/>
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
                        <td>Backend- Selecting Model, Sentiment Analysis and Server building</td>
                    </tr>
                    <tr>
                        <td>Subhankar Pal</td>
                        <td>Collecting DataSets and Data Pre-processing, Project cordinating</td>
                    </tr>
                    <tr>
                        <td>Sukumar Mondal</td>
                        <td>Frontend - React with API integration, Data Cleaning</td>
                    </tr>
                    <tr>
                        <td>Suraj Yadav</td>
                        <td>Frontend and Data Pre-processing, Documentation</td>
                    </tr>
                </table>
            </div>
            
        </div>
    </>
  )
}

export default About