import {useState, useEffect} from "react";
import '../Ifoodcounter/Ifoodcounter.css';


function Ifoodcounter(){

const [value, setValue] = useState(0)
const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

useEffect(()=>{
    document.getElementById("moeda").innerHTML = 2.00 * value
},[value])

function up(){
    setValue(value+1)
    setButtonStyle("counter-button-minus-active")
}

function down(){

    if (value > 0){
        setValue(value-1)
    } 

    if (value == 1) {
        setButtonStyle("counter-button-minus-desactive")
    }
    
}

    return(

        <div className="countex-wrapper">
            
            <button 
                    onClick={down} 
                    className={buttonStyle}>
                -
            </button>
            
            <p>{value}</p>
            
            <button 
                    onClick={up} 
                    className="counter-button-plus-active">
                +
            </button>
           
            <h1 id="moeda">0</h1>
    
        </div>

        

    )

    
}

export default Ifoodcounter;