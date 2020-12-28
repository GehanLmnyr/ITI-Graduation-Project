import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import AuthVetService from "../services/auth.doctor.service";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.logOutVet = this.logOutVet.bind(this);

    this.state = {
      currentUser: undefined,
      currentVet: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const doctor = AuthVetService.getCurrentDoctor();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    if (doctor) {
      this.setState({
        currentVet: doctor,
      });
    }


  }
  logOut() {
    AuthService.logout();
  }
  logOutVet() {
    AuthVetService.logout();
  }
  render() {
    let { currentUser, currentVet } = this.state;
    console.log(currentUser)
    const Show = () => {
      if (currentVet) {
        return (
          <div className="navbar-nav ml-auto">
            <li className="nav-item borderRight">
              <Link to={"/vet/settings"} className="nav-link">
                {currentVet.data.name}
              </Link>
            </li>
            <li className="nav-item ">
              <a href="/" className="nav-link" onClick={this.logOutVet}>
                LogOut
              </a>
            </li>
          </div>
        )
      } else if (currentUser) {
        return (          
          <div className="navbar-nav ml-auto">
          <li className="nav-item  borderRight">
            
            <div className="dropdown show">
              <div className="btn" className="dropdown-toggle mt-2 mr-3" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="Profile.pic" src={currentUser.data.img?currentUser.data.img:'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png'}  style={{ hight: '25px', width: '25px',marginRight:'10px' }}/>
                <span>{currentUser.data.name}</span>
              </div>
              

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">                
                
                <Link className="dropdown-item" to={"/profile/settings"}>Settings</Link>
                <Link className="dropdown-item" to={"/profile/reservations"}>Reservations</Link>
                <Link className="dropdown-item font-weight-bolder" to="/profile">Find Doctors!</Link>
                <hr/>
                <a className="dropdown-item text-center text-danger" href={"/"} onClick={this.logOut}>LogOut</a>
              </div>
            </div>
          </li>
          </div>
        )
      } else {
        return (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
            </Link>
            </li>

            <li className="nav-item borderRight">
              <Link to={"/register"} className="nav-link">
                Register
            </Link>
            </li>
          </div>
        )
      }
    }
    return (<nav className="navbar navbar-expand-lg navbar-dark bg shadow-sm" >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
          src="https://i.ibb.co/Chg25WH/logo3.png"
          alt='petCare logo'
        /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             {Show()}
            </li>
            
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About Us
            </Link>
            </li>
            <li className="nav-item">
              <Link to={"/team"} className="nav-link">
                Our Team
            </Link>
            </li>

            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact Us
              </Link>
            </li>
            
          </ul>

        </div></div>
    </nav>
    );
  }
}

export default NavBar;