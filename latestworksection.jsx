import card1 from "./assets/Image1.png";
import card2 from "./assets/Image2.png";
import card3 from "./assets/Image3.png";
import card4 from "./assets/Image4.png";
import card5 from "./assets/Image5.png";
import card6 from "./assets/Image6.png";

function Latestworksection(){
    return(
        <section className="latestworksection">
            <p className="title">My latest work</p>
            <div className="workscards">
                
                {/* stripe1 */}

                <div className="stripe1">
                    <div className="workcard1">
                        <img className="cardimg1" src={card1}></img>
                        <p className="minititle">Free Bird</p>
                        <p className="describtion">Lynyrd Skynyrd</p>
                    </div>
                    <div className="workcard2">
                        <img className="cardimg1" src={card2}></img>
                        <p className="minititle">Purple Haze</p>
                        <p className="describtion">Jimi Hendrix</p>
                    </div>
                    <div className="workcard3">
                        <img className="cardimg1" src={card3}></img>
                        <p className="minititle">You Really Got Me</p>
                        <p className="describtion">The Kinks</p>
                    </div>
                </div>

                {/* stripe2 */}

                <div className="stripe2">
                    <div className="workcard1  workcard11" >
                        <img className="cardimg1" src={card4}></img>
                        <p className="minititle">American Girl</p>
                        <p className="describtion">Tom Petty</p>
                    </div>
                    <div className="workcard2  workcard12">
                        <img className="cardimg1" src={card5}></img>
                        <p className="minititle">Whole Lotta Love</p>
                        <p className="describtion">Led Zeppelin</p>
                    </div>
                    <div className="workcard3  workcard13">
                     <img className="cardimg1" src={card6}></img>
                        <p className="minititle">Under Pressure </p>
                        <p className="describtion">Queen</p>
                    </div>
                </div>
            </div>
                
        </section>
    );
}
export default Latestworksection