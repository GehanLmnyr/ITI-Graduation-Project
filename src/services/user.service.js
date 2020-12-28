import axios from 'axios';


const API_URL = 'https://pet-care-iti.herokuapp.com/';

class UserService {
  // API='https://pet-care-iti.herokuapp.com/api/doctors'
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

getUserBoard() {
  return axios.get(API_URL + 'user', { headers: getUserToken = () => {
    if (localStorage.getItem('user'))
      return JSON.parse(localStorage.getItem('user')).token
  } });
}

  getAdminBoard() {
    return axios.get(API_URL + 'doctor', { headers: getUserToken = () => {
      if (localStorage.getItem('doctor'))
        return JSON.parse(localStorage.getItem('doctor')).token
    } });
  }
}

export default new UserService();
