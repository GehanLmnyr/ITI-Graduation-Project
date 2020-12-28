


const About = () => {
    return (
        <div >
            <div className="container about bg-light">
                <div className="px-5">
                <h2 className="text-center mb-4 pt-5">About our Project</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className=" text-justify p-3 bg-light">
                        <h4
                            style={{ lineHeight: "1.2" }}
                        ><b>Petcare.com</b> Website that unites all Vet Clinics and Veterinarians online and hosts reservations each of them provide services like:
                            <ol className="ml-5 mt-2">
                                <li>Healthcare</li>
                                <li>Emergency Visits</li>
                                <li>Grooming</li>
                                <li>Dog Walking</li>
                                <li>Insect control</li>
                                <li>Boarding</li>
                                <li>Training</li>
                            </ol>

                        </h4>

                    </div>
                    </div>
                    <div className="col-md-6">
                    <img 
                    style={{
                        width:'100%',
                        height:'auto' ,
                        marginTop:'40px',
                        borderRadius:'10px'
                    }} 
                    src="https://assets.petpintar.com/files/article/118/1600308990-jenis-anjing-yang-berteman-dengan-kucing-banner.jpg" 
                    alt=""
                    />
                    </div>
                    
                </div>

                <div className="row problem  py-4">
                    <div className="col-md-6">
                        <img 
                        src="https://startupnation.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-29-at-2.41.04-PM.jpg" 
                        alt='' 
                        style={{
                            width:'100%',
                            height:'100%' ,
                            borderRadius:'10px'
                        }}
                        />
                    </div>
                    <div className="col-md-6">
                    <h3>&#9734; Problem</h3>
                    <ol>
                        <li><strong>Many client doesn’t Know Vets and Vet Clinics and which one is the most suitable for his needs (Pricing/Vet Services/Vet opening and reservations times).</strong></li>
                        <li><strong>Vets and Vet Clinics don’t have a platform to market Themselves and offer their services to gain more clients </strong></li>
                    </ol>
                </div>
                </div>

            </div>
            </div>
            </div>
    );
}
export default About;