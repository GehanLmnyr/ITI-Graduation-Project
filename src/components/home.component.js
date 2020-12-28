import React, { Component } from "react";
import Card from './doctor.card';
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",

      doctors: []
    };
  }
  async componentDidMount() {
    let { data } = await axios.get(
      "https://pet-care-iti.herokuapp.com/api/doctors"
    );

    this.setState({ doctors: data.data });
  }

  renderDoctor({ doctors }) { 
    
    // console.log(this.props.userToken)
    if (doctors && doctors.length) {

      return doctors.map((doctor) => {
        return <Card doctor={doctor} key={doctor._id}/>

      })
     
    }
    return <div className="alart alart-danger">No Doctors</div>
  }


  // componentDidMount() {
  //   UserService.getUserBoard().then(
  //     response => {
  //       this.setState({
  //         content: response.data
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         content:
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString()
  //       });
  //     }
  //   );
  // }

  render() {
    return (
      <div className="container">

        <section className="jumbotron">
          <h5 className="text-dark p-2 text-center">Top Rated Vets</h5>
          <div className="row">
            <div className="col-lg-3 card bg-light py-3">
              <h4 className="text-info text-center">Filter</h4>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Gender
                  </button>
                    </h2>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Male
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Female
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>

                      </ul>

                    </div>
                  </div>
                </div>
                <div className="card">

                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Availability
                  </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Sat
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Sun
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Mon
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Fri
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>

                      </ul>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Services
                  </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Health Care
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Boarding
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Training
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Dog Walking
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Insect Control
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>

                      </ul>

                    </div>
                  </div>
                </div>
             
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
                        City
                  </button>
                    </h2>
                  </div>
                  <div id="collapseThree2" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Alex
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Cairo
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Mansoura
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Giza
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Aswan
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Suez
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>
                        
                        <li className="d-flex justify-content-between">
                          <label htmlFor="size-attribute-1" className="text-dark">
                            Ismailia
                            </label>
                          <input type="checkbox" id="size-attribute-1" className="m-2" />

                        </li>

                      </ul>

                    </div>
                  </div>
                </div>
             
             
             
              </div>
            </div>
            <div className="col-lg-9">
              {this.renderDoctor(this.state)}

              <div>

              </div>
            </div>


          </div>

          {/* <h3>{this.state.content}</h3> */}
        </section>
      </div>
    );
  }
}
