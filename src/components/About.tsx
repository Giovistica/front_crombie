
import Caja from "./Caja"
import "./Styles/About.css"

function About(){
    return (
    <div>  
    <div className = "center">
    <div id = "info">
        
        <h1>Want anything to be easy with <strong>LaslesVPN.</strong></h1>
        
            <p className = "grayText">Provide a network for all your needs withs ease and fun using 
                <b> LaslesVPN.</b></p>
            <p>discover interesting features from us.</p>
        
        
        <button className = "BigButton">
            <strong>Get Started</strong>
        </button>
    </div>
    <div>
        <img src = "public/Illustration 1.png"/>
    </div>
    </div>
    

<div id = "cajaGrande">

    <Caja img ={"public/user.png"} num={"90"} text={"Users"}/>
    
    <div className="vertical-line"></div>
    
    <Caja img ={"public/location.png"} num={"30"} text={"Locations"}/>
    
    <div className="vertical-line"></div>
    
    <Caja img ={"public/Server.png"} num={"50"} text={"Severs"}/>

</div>
</div>
)
}
export default About