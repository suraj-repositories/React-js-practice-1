import React, {useState} from "react";

function MyComponent(){

    const [car, setCar] = useState({year: 2021, make: "Ford", model: "Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favorite car : {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br /><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br /><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br /><br />

        </div>
    );

    
}
export default MyComponent