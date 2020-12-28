
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faClipboardList, faSearch, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import { Link } from "react-router-dom";

class MainHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [
                // { label: "select City", value: "select City" },
                { label: "cairo", value: "cairo" },
                { label: "doky", value: "doky" },
                { label: "Mansoura", value: "Mansoura" },
                { label: "Alexandria", value: "Alexandria" },
                { label: "Luxor", value: "Luxor" },
                { label: "Aswan", value: "Aswan" },
                { label: "Giza", value: "Giza" },
                { label: "Sharm El-Sheikh", value: "Sharm El-Sheikh" },
                { label: "Port Said", value: "Port Said" },
                { label: "Minya", value: "Minya" },
                { label: "Ismailia", value: "Ismailia" },
                { label: "Asyut", value: "Asyut" },
                { label: "Suez", value: "Suez" },
                { label: "Tanta", value: "Tanta" },
                { label: "ehdoky", value: "ehdoky" },
                { label: "Khalf", value: "Khalf" }
            ],
            address: '',
            name: '',
            rate: '',

        }
    }
    handleChangeCity = (e) => {
        // console.log(e.target.value);
        this.setState({ address: e.target.value })
    }
    handleChangeName = (e) => {
        // console.log(e.target.value);
        this.setState({ name: e.target.value })
    }

    render() {

        return (<div className="main-home">
            <header>

            </header>
            <section className="search container text-dark">


                <div className="form-row mx-2">
                    <div className="form-group col-md-5">
                        <select
                            id="inputState"
                            onChange={this.handleChangeCity}
                            className="form-control  form-control-lg">
                            <option disabled selected>Search By City</option>
                            {this.state.options.map((option) => {
                                return (<option key={option.value}>{option.value}</option>)
                            })}
                        </select>
                    </div>
                    <div className="form-group col-md-5">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="inputCity"
                            placeholder="Search By Vet Name"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                        />

                    </div>

                    <div className="form-group col-md-2">
                        <button type="submit" className="btn btn-outline"

                        ><Link to={`/doctors/name=${this.state.name}&address=${this.state.address}&rate=${this.state.rate} `}>Search</Link></button>
                    </div>
                </div>

            </section>
            <section className="use-website container text-center mt-2 border-bottom">
                <h2 className="m-4">How To Use Pet Care</h2>
                <div className="row my-5">
                    <div className="col-lg-3 col-md-6 col-sm-12  ">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faSearch} />

                        </div>
                        <div>
                            <h5>Choose Your Location</h5>
                            <p className="text-muted">
                                Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12  ">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faUserMd} />

                        </div>
                        <div >
                            <h5>Check Vets Information</h5>
                            <p className="text-muted">
                                Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12  ">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faClipboardList} />

                        </div>
                        <div >
                            <h5>Make a Reservation</h5>
                            <p className="text-muted">
                                Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12  ">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faCalendarCheck} />

                        </div>
                        <div >
                            <h5>Track Your Appointment</h5>
                            <p className="text-muted">
                                Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="animals-section">
  <h2 className="mt-5 text-center">Articles</h2>
                <div className="container hero-section ">
               
                    <div className="card-grid">
                            <Link className="card border-0" to={"/cats"}>
                                <div className="card__background card1">
                                <div className="card-body">
                                    <h3 className="card-title align-self-end">Removing Your Cat Hair</h3>
                                   </div>
                                </div>
                            </Link>
                            <Link className="card border-0" to={"/birds"}>
                                <div className="card__background card2">
                                <div className="card-body">
                                    <h3 className="card-title align-self-end">Feeding Your Bird</h3>
                                   </div>
                                </div>
                            </Link>
                            <Link className="card border-0" to={"/estates"}>
                                <div className="card__background card3">
                                <div className="card-body">
                                    <h3 className="card-title align-self-end">Pets Impact</h3>
                                   </div>
                                </div>
                            </Link>
                            <Link className="card border-0" to={"/dogs"}>
                                <div className="card__background card4">
                                <div className=" card-body">
                                    <h3 className="card-title align-self-end">Bathing Your Dog</h3>
                                   </div>
                                </div>
                            </Link>
                      
                    </div>
                </div>
            </section>


        </div>);
    }
}
export default MainHome;