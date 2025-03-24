import image from "./assets/image.png";
function Header(){
    return(
        <header className="header1">
            <div className="subhead">
                <div className="headtext">
                    <div className="enterdiv">
                        <p className="p1">Branding | Image making </p>
                        <p className="bigtitle">My awesome portfolio</p>
                    </div>
                    <p className="p2">And I made it myself! Yes. In Figma with Anima</p>
                </div>
                <img className="headerimage" src={image}/>
            </div>    
        </header>
    );
}
export default Header