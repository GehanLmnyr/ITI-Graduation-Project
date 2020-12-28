import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { } from '@fortawesome/fontawesome-svg-core'






const Footer = () => {
  return (<div className="justify-content-end text-white"> <footer className="bg-dark">
    <div className=" navbar-expand-lg navbar-dark bg">
      <div className="container p-4 border-bottom border-white">
        <div className="row">
        <div className="col-lg-3 col-sm-6 ">
          {/* <Link to="/"><img src={'./logo3.png'} className="w-75 mb-4" alt='hi'/></Link>  */}
          <div className="m-2 py-3"> 
          <h5>
            About Us
          </h5>
          <p className="font-weight-light ml-1">petCare.com is the leading digital pets's healthcare booking platform.</p> 
          </div>
          <div className="m-2 my-3"> 
          <h5>
            Contact Us
          </h5>
          <div className="d-flex mt-3">
          <FontAwesomeIcon icon={faPhone} size='lg' spin/>
          <h6 className="ml-2">+02 223-455-34</h6>
          </div>
          <div className="d-flex mt-1">
          <FontAwesomeIcon icon={faEnvelope} size='lg'/>
          <h6 className="ml-2">petCare@petCare.com</h6>
          </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 text-white pl-5">
          <h4 className="py-3 text-left">Information</h4>
          <ul className=" text-left mt-3 ">
            <li>
             <h6><Link to="/">Home page</Link></h6> 
            </li>
            <li>
             <h6> <Link to="/about">About</Link></h6>
            </li>
            <li>
             <h6><Link to="contact">Contact Us</Link></h6> 
            </li>
            <li>
             <h6><Link to="blog">Blog</Link></h6> 
            </li>
          </ul>
        </div>
          
          <div className="col-lg-3 col-sm-6 text-white">
            <h4 className="py-3 text-left">Helpful links</h4>
            <ul className=" text-left mt-1">
            <li>
             <h6><Link to="/cats">Cats</Link></h6> 
            </li>
            <li>
             <h6> <Link to="/dogs">Dogs</Link></h6>
            </li>
            <li>
             <h6><Link to="/estates">Estates</Link></h6> 
            </li>
            <li>
             <h6><Link to="/birds">Brids</Link></h6> 
            </li>
            </ul>
          </div>
          
          
          
          <div className="col-lg-3 col-sm-6 d-flex flex-column py-3 
           
          justify-content-between">

            <h5 className="font-weight-bold">Subscribe More Info</h5>
            <form>
              <div className="form-group my-2">

                <input
                placeholder="Enter Your Email"
                  type="email"
                  className="form-control"
                  name="email" />
              </div>
              <div className="form-group">
              <button
                className="btn btn-outline-light w-50 mt-2">
              
                <span>Subscribe</span>
              </button>
            </div>
            </form>




            <ul className="footer-social justify-content-end text-white d-flex">
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faFacebookF} size='lg'/>
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faTwitter} size='lg'/>
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faGithub} size='lg'/>
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faLinkedinIn} size='lg'/>
                </Link>
              </li>
            </ul>

          </div>
          
        </div>
      
      {/* <hr/> */}

      </div>
      <p className="m-0 text-center py-2 font-weight-light">2020 &#169; All Right reserved</p>
    </div>


  </footer>
  </div>
  );
}

export default Footer;