
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom, faBrush, faHandsWash, faMitten,  faSlash, faSoap } from '@fortawesome/free-solid-svg-icons'
const Cats = () => {
    return (
        <div className="container static">
            <h2>6 tips for removing cat hair from fabrics</h2>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row mb-5">
                        <div className="col-lg-5 col-md-12"><img src="https://luckydawgsalongrooming.com/wp-content/uploads/2018/05/brush-your-cat.jpeg" alt="cat card" /></div>
                        <div className="col-lg-7 col-md-12">  <h5 className="card-title mt-2">Do you have trouble removing your cat's hair lying around on your clothes, sofa or rugs? These few tips should make your life easier.</h5>
                            <p className="card-text mt-4">Having a cat is one of the most beautiful experiences you can have in your life. However, this can also involve some small inconveniences , such as feline hairs which are found everywhere.

                            Cat hair can get on clothes, furniture, rugs, rugs, car seats, etc. Due to their number and their small size, it is not easy to dislodge them . Unless you use the right methods and the right tools. The latter are not necessarily sophisticated or specifically designed to remove cat hair; they can be everyday utensils or even old items that are meant to be thrown away.

                    If you have one or more cats, then you know the extent of the problem, but know that it is possible for you to remedy it in a simple and inexpensive way.</p>
                        </div>
                    </div>



                    <div>
                        <h3 className="m-5 mt-5 text-center">Steps</h3>
                       
                        <div className="row ">
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="icon-home mr-4 mt-2">
                                    <FontAwesomeIcon icon={faMitten} size="4x" color="#555355" />

                                </div>
                                <div>
                                    <h5>A cleaning glove</h5>
                                    <p className="text-muted">
                                        Your cat's hair can be picked up easily by using a wet medium.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="icon-home mr-4 mt-2">
                                    <FontAwesomeIcon icon={faBrush} size="4x" color="#555355" />

                                </div>
                                <div>
                                    <h5>An adhesive brush </h5>
                                    <p className="text-muted">
                                        This tool is used to clean clothes and consists of a roller and a handle .</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="icon-home mr-4 mt-2">
                                    <FontAwesomeIcon icon={faSlash} size="4x" color="#555355" />

                                </div>
                                <div>
                                    <h5>Used tights</h5>
                                    <p className="text-muted">
                                        Used tights , you can use them to remove your cat's hair.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="icon-home mr-4 mt-2">
                                    <FontAwesomeIcon icon={faBroom} size="4x" color="#555355" />

                                </div>
                                <div>
                                    <h5> The vacuum cleaner</h5>
                                    <p className="text-muted">
                                        The vacuum cleaner is not the most effective way to remove cat hair </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="icon-home mr-4 mt-2">
                                    <FontAwesomeIcon icon={faSoap} size="4x" color="#555355" />

                                </div>
                                <div>
                                    <h5>A rubber brush</h5>
                                    <p className="text-muted">
                                        This brush picks up surface hairs very well, </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="icon-home mr-4 mt-2">
                                    <FontAwesomeIcon icon={faHandsWash} size="4x" color="#555355" />

                                </div>
                                <div>
                                    <h5>clean Your Hands</h5>
                                    <p className="text-muted">
                                        You must clean your hands very well.</p>
                                </div>
                            </div>

                        </div>
                    </div></div>
            </div>
        </div>
    
    
    );
}
export default Cats;