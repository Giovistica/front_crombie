
import "./Styles/Encabezado.css"

function Encabezado() {

    return (
    <div>
    <header className = "horizontal">
    <div id = "logo">
    <img src = "/public/Logo.png"/>
    </div>
    <div id = "nav"> 
        <nav className="grayText">
            
                <a href="#info">About</a>
                <a href="#segundo">Features</a>
                <a href="#ChoosePlan">Pricing</a>
                <a href="#divcarrousel">Testimonials</a>
                <a>Help</a>
            
        </nav>
    </div > 
    <div id = "buttons">  
        <button><strong>Sing Up</strong></button>
        <button className = "SingButton"><b>Sing In</b></button>
        

    </div>
</header>
</div> 
)}

export default Encabezado