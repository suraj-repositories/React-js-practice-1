import React, {useState, useEffect} from "react";
/*
useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
                This component re-renders
                This component mounts
                The state of a value changes

useEffect(function, [dependencies]);

1. useEffect(() => {})             // Runs after every re-render
2. useEffect(() => {}, [])         // Runs only on mount
3. useEffect(() => {}, [value])    // Runs on mount + when value changes

--------- USES ----------
#1 Event Listeners
#2 DOM manipulation
#3 Subscriptions (real time updates)
#4 Fetching Data from an API
#5 Clean up when a component unmount
*/

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return()=>{
            window.removeEventListener("resize", handleResize);
        }
    }, []);  // I WANT TO ADD EVENT LISTENER ONLY ONCE WHEN THE COMPONENT MOUNTS

    useEffect(() => {
        document.title = `Count : ${count} | ${color}`;
    }, [count]); // HERE I AM CHANGING THE VALUE OF TITLE ONLY WHEN THE COUNT CHANGES NOT THE COLOR CHANGE


    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    function handleAddition(){
        setCount(c => c + 1);
    }
    function handleSubstraction(){
        setCount(c => c - 1);
    }
    function handleColorChange(){
        setColor(c => c === "green" ? "red": "green");
    }


    return(
        <>
         Window Width : {width}px <br />
         Window Height : {height}px

         <br /><br />
         <p style={{color: color}}>Count : {count}</p>
         <button onClick={handleAddition}>➕</button>
         <button onClick={handleSubstraction}>➖</button>
         <button onClick={handleColorChange}>🌈 Change color</button>
        </>
    );
}

export default MyComponent
