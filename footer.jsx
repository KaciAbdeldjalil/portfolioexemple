import discord from "./assets/discord.png";
import facebook from "./assets/facebook.png";
import dribbblefoot from "./assets/dribbblefoot.png";
import instagram from "./assets/nstagram.png";
import behancefoot from "./assets/behancefoot.png";

function Footer(){
    return(
        <footer className="footer">
            
            <div className="footerinfo">
            <hr />
                <div className="enterfooterinfo">
                        <div className="contactinfo">
                            <div className="messeges">
                                    <p className="describtionbold">Let’s work together</p>
                                    <p className="footerdescribtion">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                                </div>
                                <div className="socialicons">
                                    <img className="social" src={discord}></img>
                                    <img className="social" src={facebook}></img>
                                    <img className="social" src={dribbblefoot}></img>
                                    <img className="social" src={instagram}></img>
                                    <img className="social" src={behancefoot}></img>
                                </div>
                            </div>
                        <div className="textfileds">
                            <div className="inputs">
                                <input type="username" placeholder="Name"></input>
                                <input className="emailinput" type="Email" placeholder="Email"></input>
                                <input className="textarea" type="textarea" placeholder="Type your message here" ></input>
                                {/* <label>Type your message here</label> */}
                            </div>
                            {/* <div className="submit"> */}
                                <button type="submit">Submit</button>
                            {/* </div> */}
                        </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer