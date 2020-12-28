import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPaw, faHospitalUser, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


const API_URL = 'https://pet-care-iti.herokuapp.com/api/reservations';
class Reservations extends Component {
    constructor(props) {
        super(props)
        this.state = { schedule: [] }


    }
    async componentDidMount() {
        let { data } = await axios.get(API_URL, { headers: { "Authorization": this.props.UserToken } })
        this.setState({ schedule: data.data })

    };



    renderSchedule() {
        if (this.state.schedule.length > 0) {
            return this.state.schedule.map((reservation) => {
                return (<div className="col-lg-4 user-reaservation-card" key={reservation.id}>
                    <div className="card text-center my-3 " key={reservation.id}>
                        <div className="card-header">

                            <FontAwesomeIcon icon={faHospitalUser} className="text-color mr-2" size="lg" />
                            <strong>{reservation.doctor.name ? reservation.doctor.name : 'Doctor Name'}</strong>
                        </div>
                        <div className="card-body">
                            <div className="d-flex mx-auto w-100">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-color d-inline mt-1 mr-3" />
                                <h6 className="card-title mb-3">{reservation.doctor.address ? reservation.doctor.address : 'address'}</h6> </div>
                            <div className="d-flex mx-auto w-100">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-color d-inline mt-1 mr-3" />
                                <h6 className="card-title mb-3">(+20) {reservation.doctor.phone ? reservation.doctor.phone : 'phone'}</h6> </div>



                            {reservation.services.length > 0 ?
                                <div>
                                    <div className="d-flex">
                                        <FontAwesomeIcon icon={faPaw} className="text-color d-inline mt-1 mr-3" />

                                        <h6 className="d-block"> Services</h6>
                                    </div>
                                    <ol className="text-left pl-5 text-dark">
                                        {reservation.services.map((ser) => {
                                           return <li key={ser._id} >{ser.title}</li>
                                        })}

                                    </ol></div> : ''


                            }
                            <button type="button" className="btn btn-outline-secondary px-4 ml-auto my-3 ">Delete</button>
                            <button type="button" className="btn btn-secondary px-5 my-3 ml-3" data-toggle="modal" data-target="#exampleModal">Edit</button>

                        </div>





                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form className="text-left">
                                            <div class="form-group">
                                                <label for="recipient-name" class="col-form-label ">Date</label>
                                               <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Services</label>
                                                <MultiSelectComponent 
                                                id="dropdowntree" 
                                                //   dataSource={this.getServicesTitle()} 
                                                placeholder="Choose Services" 
                                                className="e-field"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary px-4 ml-auto my-3 " data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-secondary px-5 my-3 ml-3">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer text-muted" style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                            {reservation.date}
                        </div>


                    </div>

                </div>

                )
            })
        } else {
            return 'no reservations'
        }
    }




    render() {
        console.log(this.props.UserToken)
        return (<div className="container my-5">
            <div className="row d-flex flex-wrap">

                {this.renderSchedule()}</div>


        </div>);
    }
}

export default Reservations;