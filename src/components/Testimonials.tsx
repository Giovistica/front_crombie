import './Styles/Testimonials.css'
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';


type TestimonialApi = {
    avatar: string;
    fullName: string ;
    testimonial: string;
};

const Testimonials= () => {
        const [testimonials, setTestimonials] = useState<TestimonialApi[]>([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string>();
        const [tarjetaActual, setTarjetaActual] = useState(0);
        const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
        const cardStep = isSmallScreen ? 1 : 3;
        const totalPages = Math.ceil(testimonials.length / cardStep);

        useEffect(() => {
            setLoading(true);
            fetch(`https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial`)
            .then((response) => {
                response.json().then((result) => {
                setTestimonials(result);
            });
            })
            .catch((error) => {
            setError(error.message);
            })
            .finally(() => {
            setLoading(false);
            });
        }, []);

        if (loading) {
            return <p>loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }
        const visibleTestimonials = isSmallScreen
    ? testimonials.slice(tarjetaActual, tarjetaActual + 1)
    : testimonials.slice(tarjetaActual, tarjetaActual + 3)

            function prevButton() {
                if (tarjetaActual > 0) {
                  setTarjetaActual(tarjetaActual - cardStep);
                }
              }
            
              function sigButton() {
                if (tarjetaActual < testimonials.length - cardStep) {
                  setTarjetaActual(tarjetaActual + cardStep );
                }
              }
           

    return(
    <div id = "divcarrousel">
        <div className = "CenterText">
            <h2>Trusted by a thounsands of <br/> <br/> happy customers</h2>
            <p className = "grayText">These are the stories of our customers who have joined us <br/><br/>
            with great pleasure when using this crazy feature.</p>
        </div>
        <div id = "carrousel">
            <div id="cards">
                {visibleTestimonials.map((testimonial) =>(

                    <div className = "card">
                    <div className = "profile">
                        <div className ="namePicture">
                            <img className = "profilep" src = {testimonial.avatar}/>
                            <div className = "name">
                                <h3>{testimonial.fullName}</h3>
                                <p className="grayText">Warsow, Poland</p>
                            </div>
                        </div>
                            <div className = "score">
                                <p >5.0</p>
                                <img src = "public/Group1161.png"/>
                            </div>       
                    </div>
                    <div className = "resume">
                        
                            <p>{testimonial.testimonial}</p> 
                    </div>
                </div>
                ))}
                
            </div>
            <div id = "controles">
                <div id = "points">
                
                    {Array.from({ length: totalPages }).map((_, index) => (
                <span  key={index} className={`indicator ${index * cardStep === tarjetaActual ? "active" : ""}`} onClick={()=>setTarjetaActual(index*cardStep)}></span>
        ))}
                </div>
                <div id = "arrows">
                    <button id = "botonblanco" onClick={prevButton}><img src ="public/eva_arrow-left.png"/></button>
                    <button id = "botonrojo" onClick={sigButton}><img src ="public/eva_arrow-rigth.png"/></button>
                </div>
        </div> 
        </div>
</div>
    )
}
export default Testimonials