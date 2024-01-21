import React from 'react'
import {Header, Footer, Cards} from '../Components/index'

const Home = (props) => {

  




  return (
    <>
    <Header />
    <section className='pt-5  m-auto bg-light h-25'>
      <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
               <h1 className='font1'>web Design & Development</h1>
                 <p className='font2'>
                 Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites
                 </p>
            </div>
            <div className="col-md-6 m-auto text-center">
              <img src="https://gracethemes.com/wp-content/uploads/2018/05/How-Web-Development-Framework-Work-for-Business-Progress.png" alt=""  className='w-75'/>
            </div>

          </div>

      </div>
    </section>



<section className='container'>
  <div className="pt-5">

<Cards/>
  </div>
</section>





    <Footer />
    </>
  )
}

export default Home