import React, { Component } from 'react';
import axios from "axios";




const API_URL = "https://pet-care-iti.herokuapp.com/api/doctors";
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.Doctor.name,
            password: this.props.Doctor.password,
            address: this.props.Doctor.address,
            email: this.props.Doctor.email,
            phone:this.props.Doctor.phone
        }
    }
    componentDidMount() {
        this.setState({ state: this.props.Doctor})
        console.log(this.state.doctor)
    }

    Change = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitHandle = (e) => {
        e.preventDefault();
        const obj = { ...this.state }
        console.log(obj)
         axios.patch(
            API_URL, obj,
            {
                headers: {
                    Authorization: this.props.doctorToken,
                },
            }
        )
        console.log(e)
        this.setState({state:obj})
        console.log(this.state)
    }

    render() {
        console.log(this.props.Doctor)
        console.log(this.state)
        return (
            <div>

                <div className="pb-4 px-4">
                    <h3 className="text-dark pb-4">Edit Information</h3>
                    <form onSubmit={this.onSubmitHandle}>
                        <div className="form-group d-flex pb-3 mb-5">
                            <label htmlFor="exampleFormControlFile1">
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                                    alt=""
                                    style={{ hight: '100px', width: '100px' }} /></label>
                            <input type="file" className="form-control-file mt-auto" id="exampleFormControlFile1" />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail1" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input
                                    onChange={this.Change}
                                    name='name'
                                    type="text"
                                    className="form-control"
                                    id="inputEmail1"
                                    value={this.state.name}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputEmail2" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input
                                    onChange={this.Change}
                                    name='email'
                                    type="email"
                                    className="form-control"
                                    id="inputEmail2"
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input
                                    onChange={this.Change}
                                    type="password"
                                    className="form-control"
                                    id="inputEmail3"
                                    value={this.state.password}
                                    name='password'
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input
                                    onChange={this.Change}
                                    name='address'
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    value={this.state.address}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail5" className="col-sm-2 col-form-label">Mobile</label>
                            <div className="col-sm-10">
                                <input
                                    onChange={this.Change}
                                    name='phone'
                                    type="text"
                                    className="form-control"
                                    id="inputEmail5"
                                    value={`0${this.state.phone}`}
                                />
                            </div>
                        </div>
                        <div className="form-group d-flex pr-1 my-2">
                            <button type="submit" className="btn btn-outline-secondary px-4 ml-auto my-3 ">cancel</button>
                            <button type="submit" className="btn btn-secondary px-5 my-3 ml-3">Save</button>


                        </div>

                    </form>
                </div>



            </div>

        );
    }
}

export default Settings;