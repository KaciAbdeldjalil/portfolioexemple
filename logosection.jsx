import mylogs from "./assets/Dribbble.png";
import mylogs1 from "./assets/Behance.png";
import mylogs2 from "./assets/Google.png";
import mylogs3 from "./assets/Apple.png";
import mylogs4 from "./assets/Awwwards.png";



function Logosection(){
    return(
        <section className="logosection"> 
        
        {/* <hr></hr> */}
            <div className="logos">
            <hr />
                <img className="behance" src={mylogs1}></img>
                <img className="google" src={mylogs2}></img>
                <img className="apple" src={mylogs3}></img>
                <img className="dribbble" src={mylogs}></img>
                <img className="Awwwards" src={mylogs4}></img>
                
            </div>
          

        </section>
    );
}
export default Logosection