import image1 from "./assets/Image placeholder.png";
import image2 from "./assets/Image placeholder1.png";
import image3 from "./assets/Image placeholder2.png";




function Skillssection(){
    return(
        <section className="skillsection">
            <hr></hr>
            <div className="skills">
                <div className="skill1">
                    <img className="skillimg1" src={image1}></img>
                    <div className="skill1headline">
                        <h4 className="title1">Product design</h4>
                        <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    </div>
                </div>
                <div className="skill2">
                    <img className="skillimg2" src={image2}></img>
                    <div className="skill2headline">
                        <h4 className="title1">Art direction</h4>
                        <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    </div>
                </div>
                <div className="skill3">
                    <img className="skillimg3" src={image3}></img>
                    <div className="skill3headline">
                        <h4 className="title1">Visual design</h4>
                        <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skillssection