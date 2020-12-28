import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint,  faCarrot, faSeedling, faCookieBite, faEgg} from '@fortawesome/free-solid-svg-icons'
import { faNutritionix } from '@fortawesome/free-brands-svg-icons';


const Brids=()=>{
    return(
    <div >
      <div className="container static">
            <h2>Feeding a pet bird</h2>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row mb-5">
                        <div className="col-lg-5 col-md-12"><img src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/05/22094046/best-pet-birds-finch-tucko019.jpg" alt="Card bird" /></div>
                        <div className="col-lg-7 col-md-12">  <h5 className="card-title mt-2">Diet is a determining factor in the health and well-being of a pet bird. It is also involved in its appearance, since it comes into account in the state of its plumage in particular. What a bird eats affects its reproduction as well as many other areas of its life. It is therefore essential to give your feathered companion a quality diet adapted to his needs. How to get there ? What do you need to know to feed a pet bird adequately?</h5>
                            <p className="card-text mt-4">The species, age, state of health or even the season are among the factors on which the type of food to give to your pet bird depends . There are, however, some common basic principles to know and apply. Here are some tips for feeding your bird .</p>
                        </div>
                    </div>



                    <div className="pt-5 text-center">
                        <h3 className="mb-3">The dietary requirements of pet birds</h3>
                       
                        <div className="row">
                            <div className=" col-lg-6 d-flex flex-column">
                                <div className="icon-home protein">
                                    <FontAwesomeIcon icon={faEgg} size="4x" color="#555355" />

                                </div>
                                <div className="hero">
                                    <h5>protein</h5>
                                    <p className="text-muted">
                                    Ready-to-use mixes are commercially available. They include varieties such as niger or millet. Germinated seeds are also to be given to birds</p>
                                </div>
                            </div></div></div>
                    <div className="p-5">
                        <h3 className="m-5 mt-5 text-center">The different types of food that make up the pet bird's diet</h3>
                       
                        <div className="row">
                            <div className=" col-lg-8 d-flex">
                                <div className="icon-home">
                                    <FontAwesomeIcon icon={faSeedling} size="4x" color="#555355" />

                                </div>
                                <div className="hero">
                                    <h5>Seeds</h5>
                                    <p className="text-muted">
                                    Ready-to-use mixes are commercially available. They include varieties such as niger or millet. Germinated seeds are also to be given to birds</p>
                                </div>
                            </div>
                            <div className=" col-lg-8 d-flex">
                                <div className="icon-home">
                                    <FontAwesomeIcon icon={faNutritionix} size="4x" color="#555355" />

                                </div>
                                <div className="hero">
                                    <h5>Nuts </h5>
                                    <p className="text-muted">
                                    in general, it is better to keep them for larger birds, because of their high lipid content.</p>
                                </div>
                            </div>
                            <div className=" col-lg-8 d-flex">
                                <div className="icon-home">
                                    <FontAwesomeIcon icon={faCarrot} size="4x" color="#555355" />

                                </div>
                                <div className="hero">
                                    <h5>Fruits and vegetables</h5>
                                    <p className="text-muted">
                                    raw or cooked, they make it possible to supplement the intake by providing vitamins and minerals. Cooked legumes and herbs too.</p>
                                </div>
                            </div>
                            <div className=" col-lg-8 d-flex">
                                <div className="icon-home">
                                    <FontAwesomeIcon icon={faCookieBite} size="4x" color="#555355" />

                                </div>
                                <div className="hero">
                                    <h5> The breeding food</h5>
                                    <p className="text-muted">
                                    the pet bird food can be prepared at home. It is made from dry mash, breadcrumbs, rusks, brewer's yeast, niger seed, vitamins (supplements) powder, omega 3/6 capsules, cooked and washed rapeseed, egg (for the shell) and a small amount of honey.</p>
                                </div>
                            </div>
                            <div className=" col-lg-8 d-flex">
                                <div className="icon-home">
                                    <FontAwesomeIcon icon={faTint} size="4x" color="#555355" />

                                </div>
                                <div className="hero">
                                    <h5>Water</h5>
                                    <p className="text-muted">
                                    it should be renewed every day to stay fresh and clean. The drinkers are also to be cleaned daily. </p>
                                </div>
                            </div>
                      

                        </div>
                    </div></div>
            </div>
        </div>
    
    
    </div>
    );
}
export default Brids;