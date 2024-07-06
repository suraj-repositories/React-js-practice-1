import React, {useState} from "react"; // this is called object destructuring

function MyComponent(){
    
    // this is called array destructuring
    const [name, setName] = useState("Guest");      // the value within useState hook function is the value of variable    // you may or may not pass the value
    const [age, setAge] = useState(0);         
    const [isEmployed , setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Tushar Srivastav");
    };

    const incrementAge =() =>{
        setAge(age + 1);
    };

    const toggleIsEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>
         
            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increment</button>
          
            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleIsEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent