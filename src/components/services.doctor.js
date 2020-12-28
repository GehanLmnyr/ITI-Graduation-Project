import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


class Services extends Component {

  constructor(props) { 
    super(props);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.state = {
      services: [],
      price:'',
      // checked:false,

    }
  }


  async componentDidMount() {
    console.log(this.props.ServiceIDs)
    let { data } = await axios.get(
      "https://pet-care-iti.herokuapp.com/api/services"
    );
   
    let ids = ["5fc61a0ab386840017167774","5fc61a48b386840017167775","5fc61a6cb386840017167776","5fc61a8cb386840017167777","5fc61aa6b386840017167778","5fc61b58b386840017167779","5fc61b7cb38684001716777a"]
    for (let i=0;i<this.props.ServiceIDs.length;i++)
    {
        for ( let j=0;j<data.data.length;j++){
          if(this.props.ServiceIDs[i]===ids[j]){
            this.props.onChecked[j]=true
            console.log(i,j)
           }
        }
        this.setState({ services: data.data });
    }
    

  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  handleEdit(e) {
    e.preventDefault();
    // console.lo(e);
    this.setState({price:e.target.value})
  }



  render() {

    return (



      <div>
        <h2 className="text-dark pl-4">Services</h2>
        <table className="table text-center my-5 px-5">
          <thead>
            <tr>
              <th scope="col" className="text-left">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            {this.state.services.map((service) => {
              let index = this.state.services.indexOf(service)
              return (<tr key={service._id}>
                <th scope="row" className="text-left ">{service.title}</th>
                <td>
                {`${this.state.price}` ? `${this.state.price} L.E`:'250L.E'} <FontAwesomeIcon icon={faEdit} className="mr-2" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"/>

                  <div className="modal fade" id="exampleModal" tablndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Edit Price</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={this.handleEdit}>
                            <div className="form-group">
                              <label htmlFor={service._id} className="col-form-label"></label>
                              <input 
                              type="text" 
                              className="form-control" 
                              id={service._id} 
                              name="price"
                              value={this.state.price}
                              onChange={this.onChangePrice}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-outline-secondary px-4 my-3 " data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-secondary px-5 my-3 ml-3">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <label 
                  className="switch"
                  >
                    <input 
                    type="checkbox"  
                    id={service._id}
                    checked={this.props.onChecked[index]}

                    // onChange={(e)=>{
                    //   console.log(e.target.checked)
                    // }}
                    onChange={this.props.onChangeChecked}
                    name={service.title}
                    image={service.image}
                    key={service._id}
                    />
                    <span className="slider round" htmlFor={service._id}></span>
                  </label>
                </td>
              </tr>)
            })}





              
          </tbody>
        </table>

      </div>
    );
  };
}
export default Services;
