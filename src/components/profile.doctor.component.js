import React, { Component } from "react";
import AuthVetService from "../services/auth.doctor.service";
import { Link, Route } from "react-router-dom";
import Settings from "./setting.doctor";
import Schedule from './schedule.doctor';
import Services from './services.doctor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCog, faPaw } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";




const API_URL = 'https://pet-care-iti.herokuapp.com/api/doctors/servicses';
export default class VetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVet: AuthVetService.getCurrentDoctor(),
      availableServices:[],
      checked:[false,false,false,false,false,false,false],
    };
  }


componentDidMount(){
  this.setState({availableServices:this.state.currentVet.data.services.map((service)=>{return service._id})})
  if(this.state.availableServices){
  }
  
}



  onChangeChecked=(e)=>{
    this.setState({checked:e.target.checked})
    console.log(e.target.id)
    if(this.state.availableServices.includes(e.target.id)){
       axios.patch(     
        API_URL,
        {serviceId:e.target.id,
          status:-1},
        {
          headers: {
          Authorization: this.state.currentVet.token,
          },
        }
      )
     
    console.log('checked')
    console.log(this.state.availableServices)
    }else{
      axios.patch(
        API_URL,
        {serviceId:e.target.id,
          status:1},
        {
          headers: {
          Authorization: this.state.currentVet.token,
          },
        }
      )
    }
  }





















  render() {
    const { currentVet } = this.state;
    // console.log(currentVet.token)
  console.log(this.state.availableServices)

    // console.log(currentVet.data)
    // console.log(currentVet.data.services)
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-4 col-md-5 d-flex flex-column align-items-center py-5 align-self-start">
              <img
                src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                alt=""
                style={{ hight: '150px', width: '150px' }}
              />
              <h4 className="mt-2 mb-5 text-left">Vet/{currentVet.data.name}</h4>
              {/* <h5 className="mb-3"> {currentVet.data.email}</h5> */}
              <ul className="nav d-flex flex-column align-content-between m-auto doctor-ul">
                <li className="nav-item w-100 align-self-center">
                  <Link to="/vet/settings" className="row nav-link d-flex">
                    <FontAwesomeIcon icon={faCog} className="m-1 mr-3" />
                    <p>Settings</p>
                  </Link>
                </li>
                <li className="nav-item align-content-between">
                  <Link to="/vet/schedule" className="row nav-link d-flex">
                    <FontAwesomeIcon icon={faCalendarAlt} className="m-1 mr-3" />
                    <p>Schedule</p>
                  </Link>
                </li>
                <li className="nav-item align-content-between">
                  <Link to="/vet/services" className="row nav-link d-flex">

                    <FontAwesomeIcon icon={faPaw} className="m-1 mr-3" />
                    <p>Services</p>


                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-7 border">
              <h3 className="text-center py-4 mb-3">Doctor Dashboard</h3>


              <Route exact path="/vet/settings" render={
                ()=>{
                return <Settings Doctor={currentVet.data} doctorToken={currentVet.token} history={this.props}/>
              }} />
              <Route exact path="/vet/schedule" render={
                ()=>{
                return  <Schedule  doctorToken={currentVet.token} />
                }
              }/>
              <Route exact path="/vet/services"
              render={()=>{
                console.log(this.state.checked)
                return <Services 
                onChecked={this.state.checked}
                onChangeChecked={this.onChangeChecked}
                ServiceIDs={this.state.availableServices}
                
                />
              }}/>
               
            </div>
          </div>
        </div>
      </React.Fragment>

      // <div className="container">
      //   <header className="jumbotron">
      //     <h3>
      //       <strong className="text-info">{currentVet.data.name}</strong> Profile
      //     </h3>
      //   </header>
      //   <p>
      //     <strong>User Token:</strong>{" "}
      //    {currentVet.token}
      //   </p>
      //   <p>
      //     <strong>Address:</strong>{" "}
      //     {currentVet.data.address}
      //   </p>
      //   <p>
      //     <strong>Email:</strong>{" "}
      //     {currentVet.data.email}
      //   </p>

      // </div>
    );
  }
}
