import axios from "axios";

const API_URL = "https://pet-care-iti.herokuapp.com/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "api/users/login", {
        email,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password,address) {
    return axios.post(API_URL + "api/users/signup", {
      name,
      email,
      password,
      address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
