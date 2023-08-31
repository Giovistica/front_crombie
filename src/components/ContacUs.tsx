import { useState } from "react";
import './Styles/contactUs.css'

type Data = { 
    name: string,
    email: string,
    message: string,

} 
function ContactUs() {
    const [data,setData]=useState<Data>({
        name: "",
        email: "",
        message: "",
        })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
    try {
        
        const response = await fetch(`https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if(response.ok){
            const data = await response.json();
            console.log(data);
    
        }        
    }catch (error) {
        console.error('Error en la solicitud:', error);
        }
    }
    return (
        <div id="subscribef">
            <form id = "subscribe" onSubmit = {handleSubmit} >
                <div>   
                        <h2>Contact Us Now To <br/> Know Special Features!</h2>
                        <div className = "centered">
    
    <input placeholder = "Name" onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({...prevData,name: e.target.value,}))
        }} type="text" value={data.name} required/>

    <input  placeholder = "Email" onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({...prevData,email: e.target.value}))
        }} type="email" value={data.email} required/>

    <input  placeholder = "Mensaje" onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({...prevData,message: e.target.value}))
        }}  type="textArea" value={data.message} required/>
                        </div>
                </div>
                <div>
                    <button type="submit" className = "BigButton"><b>Contac Us!</b></button>
                </div>    
            </form>
        </div>
    )
}
export default ContactUs