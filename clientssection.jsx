import Authorimg1 from "./assets/Author images1.png";
import Authorimg2 from "./assets/Author images2.png";
import Authorimg3 from "./assets/Author images3.png";
import Star from "./assets/Star.png";


function Clientssection(){
    return(
        <section className="clientsection">
            <div className="clientcards">
                <p className="clienttitle">Clients</p>
                <div className="clientscards">

                    {/* clientcard1 */}

                    <div className="clientcard1">
                        <div className="miniclientcard">
                        <div className="text"><p className="firstdescribtion">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p></div>
                            <div className="clientinfo">
                                <img className="authorimg" src={Authorimg1}></img>
                                <div className="rate">
                                    <div className="ratestar">
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        
                                    </div>
                                    {/* <div className="seconddecribtion"> */}
                                    <p className="seconddecribtion">Gemma Nolen, Google</p>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* clientcard2 */}

                    <div className="clientcard2">
                        <div className="miniclientcard">
                            <p className="firstdescribtion">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                            <div className="clientinfo">
                            <img className="authorimg" src={Authorimg2}></img>
                                <div className="rate">
                                    <div className="ratestar">
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                    </div>
                                    <p className="seconddecribtion">Gemma Nolen, Google</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* clientcard3 */}

                    <div className="clientcard3">
                        <div className="miniclientcard">
                            <p className="firstdescribtion">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                            <div className="clientinfo">
                            <img className="authorimg" src={Authorimg3}></img>
                                <div className="rate">
                                    <div className="ratestar">
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                        <img src={Star} className="ratestars"></img>
                                    </div>
                                    <p className="seconddecribtion">Gemma Nolen, Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Clientssection