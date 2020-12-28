import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import {
  faMapMarkerAlt,
  faPaw,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
let raters = Math.floor((Math.random() * 300) + 1);



const star = {
  size: 30,
  count: 5,
  isHalf: true,
  value: 4,
  color: "grey",
  activeColor: "#ffd700",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  },
};



const Card = ({ doctor }) =>
  doctor.services.length > 0 ? (
    <div className="docCard">
      <Link to={`/docInfo/${doctor._id}`}>
        <div className="card ml-2 px-4 mb-4 p-4 ">
          <div className="row">
            <div className="col-md-4 col-sm-12"  align="center"
            >
              <img
                className="doctor-card-img mr-3"
                src="https://abingdonsquarevet.com/wp-content/uploads/2019/12/Dr-Brett-Shorenstein-web.png?x42674"
                alt=""

              /> </div>
              <div className="col-md-7">
              
                  <div className="ml-4 text-dark mt-2 " >
                    <h3 >{doctor.name}</h3>
                    <div className="row">
                <div className="col-md-7">
                    <ul className="ml-4">
                      <li className="text-dark">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        {doctor.address}
                      </li>
                      <li className="text-dark mt-3">
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                        {doctor.phone}
                      </li>
                      <li>
                        <div className="App">
                          <ReactStars {...star} />
                          <p className="text-dark" style={{ fontSize: "13px" }}>
                            Overall Rating from <strong>{raters} </strong>Users
                  </p>
                        </div>
                      </li>
                    </ul>
                    </div>
                
                <div className="col-md-5">
                <div className="text-dark">
                <span>
                  {" "}
                  <strong >
                    <FontAwesomeIcon icon={faPaw} className="mr-2" />
                Services
              </strong>
                </span>
                <div className="text-dark  ">
                  {doctor.services && (
                    <div>
                      {doctor.services.map((service) => {
                        return (
                          <div className=" d-flex ">
                            <img
                            className="mt-2"
                              src={`${service.image}`}
                              alt="service"
                              style={{ height: "25px", width: "25px" }}
                            />
                            <p className="m-2 ">{service.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

                </div></div>
              </div>


            

            </div>
         
          </div>
        </div>
      </Link>
    </div>
  ) : (
      ""
    );

export default Card;
