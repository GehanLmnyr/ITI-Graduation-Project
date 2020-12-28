import React, { Component } from "react";
import Card from './doctor.card';
import axios from "axios";
import queryString from 'query-string';


export default class FilteredDoctors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      selectedDoctors: [],
      loading: true,
    };
  }

async componentDidMount() {
  // console.log(this.props.location)
  // console.log(this.props.location.pathname)
  const split=this.props.location.pathname.slice(9)
  // console.log(split)
  const qs=queryString.parse(split)
  // console.log(qs.name)
  // console.log(qs.address)
  // console.log(qs)
     
      if(qs.name && qs.address){
        let { data } = await axios.get(`https://pet-care-iti.herokuapp.com/api/doctors?name=${qs.name}&address=${qs.address}&rate=${qs.rate}`
                );
        // console.log(data)
        this.setState({ selectedDoctors: data.data ,loading: false});
        // console.log(this.state.selectedDoctors)
      }else if(qs.name && !qs.address){
        let { data } = await axios.get(`https://pet-care-iti.herokuapp.com/api/doctors?name=${qs.name}&rate=${qs.rate}`
        );
        // console.log(data)
        this.setState({ selectedDoctors: data.data ,loading: false});
        // console.log(this.state.selectedDoctors)
      }else if(qs.address&& !qs.name){
        let { data } = await axios.get(`https://pet-care-iti.herokuapp.com/api/doctors?address=${qs.address}&rate=${qs.rate}`
        );
        console.log(data)
        this.setState({ selectedDoctors: data.data ,loading: false});
        // console.log(this.state.selectedDoctors)
      }else{
         let { data } = await axios.get(`https://pet-care-iti.herokuapp.com/api/doctors`)
         this.setState({ selectedDoctors: data.data ,loading: false});
      }     
}

  renderDoctor() {
    if (this.state.selectedDoctors.length>0) {
    return this.state.selectedDoctors.map((doctor) => {
      return <Card doctor={doctor} key={doctor._id} />
      })
    }else{
   
   return  (  <div className="alert alert-danger">No Matching Result</div>)
  }
  }

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
        {!this.state.loading && (
           <h5 className="text-dark00 text-center">Top Rated Vets</h5>
        )}
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
            <div
                className="d-flex justify-content-center"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  
                  <span className="spinner-border spinner-border-sm  text-secondary"></span>
                )}
               
              </div>

              {this.renderDoctor(this.state)}
        
            </div>


          </div>
        </section>
      </div>
    
    );
  }
}
