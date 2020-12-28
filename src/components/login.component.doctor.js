import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthVetService from "../services/auth.doctor.service";
import { Link } from 'react-router-dom';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


export default class LoginVet extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthVetService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/vet/settings");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="container">
      <div className="col-md-8 col-sm-10 mx-auto mt-5 my-5">
        <div className="card">
        <h2 className="text-center mt-4">Vet Login</h2>
          <Form className="my-4 mx-auto col-8 col-xm-10"
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
             
              <Input
              placeholder="Enter Your Email"

                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required , email]}
              />
            </div>

            <div className="form-group">
              
              <Input
              placeholder="Enter Your Password"

                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required ,vpassword]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-outline"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

            <div className="login-or">
                <hr className="hr-or"></hr>
                <span className="span-or">or</span>
            </div>
        
            <h5 className="text-muted text-center">
                Don't have account?
                <Link to="/register" className="custom-color">
                &nbsp;  Sign up here
                </Link>
            </h5>
            <h5 className="text-center my-2">  <Link to="/login"  className="text-muted ">Login as a User
            </Link ></h5>
          </Form>
        </div>
      </div></div>
    );
  }
}
