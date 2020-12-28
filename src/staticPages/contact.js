


const Contact = () => {
    return (
        <div >
            <div className="container about">
                <h2 className="text-center my-4">Contact with The Team</h2>
                <section className="contact py-4 mt-5" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <form className="">
            <div className="row">
              <div className="col-md-6 col-sm-12 form-group">
                <input type="text" className="form-control for  " id="formGroupExampleInput" placeholder="First Name"/>
              </div>
              <div className="col-md-6 col-sm-12 form-group">
                <input type="text" className="form-control for  " id="formGroupExampleInput2" placeholder="Last Name"/>
              </div>
            </div>

            <div className="form-group">
              <input type="text" className="form-control  " id="formGroupExampleInput" placeholder="Email Address"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control " id="formGroupExampleInput2" placeholder="Contact Num"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Skype ID"/>
            </div>
            <div className="form-group">
              <textarea type="text" className="form-control " id="formGroupExampleInput2" rows="6" placeholder="Massage"></textarea>
            </div>
          </form> <button className="btn btn-sm btn-outline px-5 mt-4">ENQUIRE</button>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <h4 className="font-weight-bold my-2">PetCare@gmail.com</h4>
          <h6 className=" mb-4">Cairo , Egypt</h6>
          <img src="https://www.aou.edu/wp-content/uploads/2017/06/nasr-city-cairo-egypt-google-maps.jpg" className="w-100 h-auto my-2 border-dark rounded" alt=""/>


        </div>
      </div>
     
    </div>
  </section>
                </div>
            


        </div>
    );
}
export default Contact;