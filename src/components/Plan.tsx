type Subscription = {
    title: string;
    price: number | "Free";
    benefits: string[];
    currency: "U$S" | "$ARG";
    type: "monthly" | "daily" | "weekly";
  };
const Plan:React.FC<{subscription:Subscription}> = ({subscription})=>{
    return (
        <div className = "plan">
        <div className = "div1">
            <img src = {`public/${subscription.title}.png`}/>
        <h3>{subscription.title}</h3>
        <ul className = "grayText">
        {subscription.benefits.map((benefit, index) => (
            <li className = "li1" key={index}>{benefit}</li>
        ))}
        </ul>
        </div>
        <div className = "div2">
                <h4>{subscription.currency} <b>{subscription.price}</b>
                <span className = "grayText"> {subscription.type}</span></h4>
                <button className="SingButton"><strong>Select</strong></button>
            </div>
        
    </div>
    )
}
export default Plan