import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";

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

const vname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vaddress = value => {
  if (value.length < 3 || value.length > 50) {
    return (
      <div className="alert alert-danger" role="alert">
        The address must be between 3 and 50 characters.
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

const str= RegExp(/(01)[0-9]{9}$/);
const vmobile = value => {
  if (!(str.test(value))) {
    return (
      <div className="alert alert-danger" role="alert">
        The Mobile must start with 01 and consist of 11.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCoPassword = this.onChangeCoPassword.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);

    this.state = {
      name: "",
      email: "",
      address:"",
      password: "",
      confirmPassword:'',
      mobile:'',
      successful: false,
      message: ""
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    });
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
  onChangeCoPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    });
  }


  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.name,
        this.state.email,
        this.state.password,
        this.state.address
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
      <div className="col-md-8 col-sm-10 mx-auto mt-5 my-5">

        <div className="card">
          <h2 className="text-center mt-4">Signup</h2>
          <Form
            className="my-4 mx-auto col-8 col-xm-10"
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                 
                  <Input
              placeholder="Enter Your Name"

                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangename}
                    validations={[required, vname]}
                  />
                </div>

                <div className="form-group">
                  
                  <Input
              placeholder="Enter Your Email"

                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
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
                    validations={[required, vpassword]}
                  />
                </div>
                <div className="form-group">
                 
                  <Input
              placeholder="Confirm Your Password"

                    type="password"
                    className="form-control"
                    name="copassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChangeCoPassword}
                    validations={[required]}
                  />
                  {this.state.password !== this.state.confirmPassword && (
                <div className="alert alert-danger" role="alert">
                  Passwords don't match
                </div>
               )}
                </div>

                <div className="form-group">
                
                  <Input
              placeholder="Enter Your Address"

                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required, vaddress]}
                  />
                </div>
                <div className="form-group">
                
                  <Input
              placeholder="Enter Your Mobile"

                    type="text"
                    className="form-control"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.onChangeMobile}
                    validations={[vmobile]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-outline">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
              You have account? { }
              <Link to="/login" className="custom-color">
                Login here
                  </Link>
            </h5>
            <h5 className="text-center my-2">  <Link to="/register/doctor"  className="text-muted ">Register as a Vet</Link ></h5>
          
          </Form>
        </div>
      </div></div>
    );
  }
}
