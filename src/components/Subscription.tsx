import {useState, useEffect} from 'react'
import Plan from './Plan';
import './Styles/subscription.css'

type Subscription = {
    title: string;
    price: number | "Free";
    benefits: string[];
    currency: "U$S" | "$ARG";
    type: "monthly" | "daily" | "weekly";
  };

function Subscription () {

    const [subscriptions, setSubcriptions] = useState<Subscription[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSubcriptions(result);
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

    return (
    <div id = "ChoosePlan">
    <div className = "CenterText">
        <h2>Choose Your Plan</h2>
        <p className = "grayText">Lets choose the package that is best for you 
            and explore it happily and <br/> cheerfully.</p>
    </div>
    <div id = "planes">
      {subscriptions.map((subscription) =>(
      <Plan key={subscription.title}  
      subscription = {subscription} />))
      }
        
    </div>

</div>
)}

export default Subscription;