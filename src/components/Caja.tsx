

const Caja = ({img,num,text})=>{

    return(
    <div className = "caja">
        <img src = {img}/>
        <div className = "textoCaja"> 
            <h4 className = "sintop">+{num}</h4>
            <p className="grayText fs20">{text}</p>
        </div>
    </div>
    )

}
export default Caja