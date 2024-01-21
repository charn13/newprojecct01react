import React from 'react'
import {Header, Footer,} from '../Components/index'

const About = () => {
  return (

    <>
          <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://pluspng.com/img-png/web-development-png-image-850.png" alt="" className='abouti' />
            </div>
             <div className='col-md-6 fs-5 p-5'>
              <h1>What is Full Stack Web Development and why is it important to learn?</h1>
              <p>Full Stack Development is a software profession/stream where a developer deals with both the Frontend (client-side) and Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is one of the high-demand jobs in the software industry.</p>
             </div>
          </div>
        </div>

          
    <Footer />

    </>
  )
}

export default About