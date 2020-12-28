import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Home from './home.component';
import SettingsUser from './setting.user';
import Reservations from './user.reservations';
import { Route} from "react-router-dom";



export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    currentUser: AuthService.getCurrentUser()
    
    };
  }

  render() {
    
    const { currentUser } = this.state;
    // console.log(currentUser.data)
    // console.log(currentUser.token)
    return ( <React.Fragment>
      <div className="container">
       
          <Route exact path={"/profile"} render={()=>{
          return  <Home/> 
          }}/>

          <Route path={"/profile/settings"} render={()=>{
            return <SettingsUser User={currentUser.data} UserToken={currentUser.token}/>
          }} />
          <Route path={"/profile/reservations"} render={()=>{
            return <Reservations UserToken={currentUser.token} />
          }} />
        
   
      </div>
      
      </React.Fragment>
    );
}
}
