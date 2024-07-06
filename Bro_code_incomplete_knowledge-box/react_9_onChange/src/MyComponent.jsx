import React, {useState} from "react";

// onChange = event handler used primarily with form elements 
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

function MyComponent() {

    const [name, setName] = useState("");
    const [quantity , setQuantity] = useState(1);
    const [msg , setMsg] = useState("");
    const [payment, setPayment] = useState("Visa");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const handleQuantityChange = (event) =>{
        setQuantity(event.target.value);
    }
    const handleMsgChange = (event) =>{
        setMsg(event.target.value);
    }
    const handlePaymentSelect = (event) =>{
        setPayment(event.target.value);
    }
    const handleShippingChange = event =>{
        setShipping(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <br />Name : {name}
            <br /><br />

            <input type="text" value={quantity} onChange={handleQuantityChange}/>
            <br />Quantity : {quantity}
            <br /><br />
            <textarea value={msg} onChange={handleMsgChange} placeholder="enter your message"/>
            <br />Message : {msg}
            <br /><br />
            <select value={payment} onChange={handlePaymentSelect}>
                <option value="">select an option</option>
                <option value="Visa" >Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="CreditCard">CreditCard</option>
            </select>
            <br />Payment : {payment}
            <br /><br />
            <input type="radio" value="Pick Up" onChange={handleShippingChange} checked={shipping === "Pick Up" ? true: false} /> Pick Up <br />
            <input type="radio" value="Delivery" onChange={handleShippingChange} checked={shipping === "Delivery" ? true: false} /> Delivery
            <br />Shipping : {shipping}
        </div>
    );
}

export default MyComponent;