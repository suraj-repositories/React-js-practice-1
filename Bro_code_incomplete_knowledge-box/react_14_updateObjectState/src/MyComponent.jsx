
import React, { useState } from "react";

function MyComponent() {

    const [carArray, setCarArray] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCarArray(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleRemoveCar(index) {
        setCarArray(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>Your Favorite cars</h2>
            <ul className="cars-list">
                {carArray.map((item, index) => (
                    <li key={index} onClick={()=>handleRemoveCar(index)}>{item.year} {item.make} {item.model}</li>
                ))}
            </ul>

            <br />
            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} placeholder="Enter Maker" onChange={handleMakeChange} /><br />
            <input type="text" value={carModel} placeholder="Enter Model" onChange={handleModelChange} /><br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );
}

export default MyComponent