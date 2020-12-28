import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/js/bootstrap.js'
import "./App.css";


import AuthService from "./services/auth.service";
import AuthVetService from "./services/auth.doctor.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
import RegisterVet from './components/register.component.doctor';
import LoginVet from './components/login.component.doctor';
import VetProfile from './components/profile.doctor.component';
import NavBar from "./components/nav";
import Footer from "./components/footer";
import MainHome from './components/main-home';
import FilteredDoctors from './components/filltered.doctors';
import Docinfo from './components/doc-info';
import Cats from './staticPages/cats';
import Dogs from './staticPages/dogs';
import Brids from './staticPages/brids';
import Estates from './staticPages/estates';
import About from './staticPages/about';
import Blog from './staticPages/blog';
import Contact from './staticPages/contact';
import { ToastContainer } from 'react-toastify';




class App extends Component {
  constructor() {
    super();
    this.logOut = this.logOut.bind(this);
    this.logOutVet = this.logOutVet.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
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
    return (
      <div className="app-container">
        <div className="content-wrap">
          <ToastContainer />
          <NavBar  />

          <div className="mb-3">
            <Switch>
              
              <Route exact path="/doctors" component={Home}/>
              <Route path="/doctors/:name?/:address?/:rate?" component={FilteredDoctors}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/login/doctor" component={LoginVet} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/register/doctor" component={RegisterVet} />
              <Route path="/profile/" component={Profile} />
              <Route path="/vet/" component={VetProfile} />
              <Route exact path={["/", "/home"]} component={MainHome} />
              <Route path="/docInfo/:_id" component={Docinfo} />
              <Route exact path="/cats" component={Cats} />
              <Route exact path="/dogs" component={Dogs} />
              <Route exact path="/birds" component={Brids} />
              <Route exact path="/estates" component={Estates} />
              <Route exact path="/about" component={About} />
              <Route exact path="/team" component={Blog} />
              <Route exact path="/contact" component={Contact} />

              <Route path="*" render={()=>{
                return (<div className="container" style={{height:'60vh'}}><div className="alert alert-danger my-5 text-center"> <h1><strong className="text-danger d-block"> 404</strong> Not Found</h1> </div></div>)
              }}/>
            </Switch>
          </div>
        </div>
       
        <Footer />


      </div>
    );
  }
}

export default App;
