import React, {useState} from "react";

/*
update function : A function passed as an argument to setState() usually
                  ex. setYear(arrow function)
                      setYear((y) => y + 2)
                  allow for safe updates based on the previous stage
                  Used with multiple state updates and asynchronous functions
                  Good practice to use update function 
*/

function MyComponent(){

    const [count , setCount] = useState(0);

    function handleDecrement(){
        setCount((c) => c - 1);
        setCount((c) => c - 1);
        setCount((c) => c - 1);
    }
    function handleReset(){
        setCount(0);
    }
    function handleIncrement(){
        setCount((c) => c + 1);
        setCount((c) => c + 1);
        setCount((c) => c + 1);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default MyComponent;