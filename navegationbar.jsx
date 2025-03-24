// import { useState } from "react";
import menu from "./assets/Menu.png"
import remove from "./assets/x1.png"
function Navbar(){
    // const [add, setAdd]= useState({
    //     display : "none",
    // });
    // const hindelclick = () =>{
    //     setAdd({
    //         display: add.display === "none" ? "block" : "none",
    //     });
    // };
    // const [remo, setRemo] = useState({
    //     display:"block",
    // });
    // const removeit = () =>{
    //     setRemo({
    //         display: remo.display === "block"? "none" : "block",
    //     });
    // };
    // const allstyle = {...add, ...remo};
    return(
        <header  className="header">
            {/* <img className="image" src="#" alt="Logo"/> */}
            <p className="image">Logo</p>
            <nav className="navbar"> 
                <div  className="link" id="link">
                    <div className="enterlink">  
                        <a className="about" href="#">About</a>
                        <a className="work" href="#">Work</a>
                        <a className="contact" href="#">Contact</a>
                        <img  className="x" id="x" src={remove}></img>
                    </div>  
                </div>
                <img  className="menu" id="menu" src={menu}></img>
            </nav>
        </header>
    );

}
export default Navbar