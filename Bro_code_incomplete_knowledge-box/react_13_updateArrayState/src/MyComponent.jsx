import React, { useState } from "react";

function MyComponent() {

    const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

    function handleFoodChange(){
        const foodName = document.getElementById("foodName").value;
        document.getElementById("foodName").value = "";
        setFood(f => [...f, foodName]);
    }

    function handleRemoveChange(index){
        setFood(f => f.filter((_, i) => i !== index));
    }


    return (
        <div>
            <h2>My Favorite Foods</h2>
            <ul className="food-list">
                {food.map((item, index) => (
                    <li key={index} onClick={() => handleRemoveChange(index)}>{item}</li>
                ))}
            </ul>

            <input type="text" id="foodName" placeholder="Enter food"/>
            <button onClick={handleFoodChange}>Add Food</button>

        </div>
    );
}

export default MyComponent;