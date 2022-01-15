import {useState} from 'react';

function Smartcounter(){

    const [quantity, alterQuantity, downQuantity] = useState(0);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> alterQuantity(quantity + 1)}>Aumentar</button>
            <button onClick={()=> alterQuantity(quantity - 1)}>Diminuir</button>
        
        </>

    )
}

export default Smartcounter;