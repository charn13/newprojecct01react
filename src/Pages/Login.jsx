import React from 'react'
import { Header, Footer } from '../Components'


const Login = () => {
  return (
   <>
   <Header />
   <form className=' text-center '>
 
  <div className="form-outline mb-4 pt-5 ">
    <input type="email" id="form2Example1" className="form-control inputb w-25 m-auto" />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>


  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control inputb w-25 m-auto " />
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
     
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
 
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>


  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
<Footer />
   </>
  )
}

export default Login