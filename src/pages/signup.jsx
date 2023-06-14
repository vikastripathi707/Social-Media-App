import React from 'react'
import SocialDesktop from "../img/social-desktop.png";
import SocialMobile from "../img/social-mobile.png";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
          <img className="SocialDesktop" style={{height:"85%"}} src={SocialDesktop} alt="logo" />
          <img className="SocialMobile" src={SocialMobile} />
        </div>
        <div className="col-md-5 col-sm-12">
            {/* Login Card Part  */}
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-body px-5 col-sm-12">
              <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
              {/* Form For Credential Input  */}
              <form>
                <div className="mb-3">
                  <input type="text" className="p-2 mb-2  input-bg form-control" placeholder="Phone" />
                  <input type="email" className="p-2 mb-2  input-bg form-control" placeholder="Email" />
<input type='text' className="p-2 mb-2  input-bg form-control" placeholder="Full Name" />
                  <input type="password" className=" p-2 form-control input-bg" placeholder="Password"  />
                </div>

       <div className="d-grid"><button type="submit" className="custom-btn custom-btn-blue"> Login</button>
                <div className="my-4">
                    <hr className="text-muted" />
                    <h5 className="text-muted text-center">OR</h5>
                      <hr className="text-muted" />
                </div>
                  </div> 
                  <div className="d-grid mt-3 mb-5">
                    <button type="submit" className="custom-btn-white custom-btn"> <span className="text-muted fs-6"> Already  have an account? </span><Link to="/login" className="text-info ms-1 fw-bold">Log in </Link></button> </div> 
              </form>
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
