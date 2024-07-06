// we can also apply the onclick event to images if we want
function Button(){

    let handleClick = (e) => {
        e.target.textContent = "Subscribed! 😀";
    };

    let handleClick2 = (e) => {
        e.target.style.color = "green";
        e.target.textContent = "changed color 🍎";
    }

    let handleClick3 = (text) => {
        alert(text);
    }

    let handleClick4 = (e) => {
        console.log("This will happen on Double click");
        e.target.textContent = "Double clicked ☠️";
    }

    return(
        <>
            <button onClick={(e) => handleClick(e)}>Subscribe 🙂</button><br /><br />
            <button onClick={(e) => handleClick2(e)}>change Color 🍏</button><br /><br />
            <button onClick={() => handleClick3("Orange")}> my name? 🍊</button><br /><br />
            <button onDoubleClick={(e) => handleClick4(e)}>Dubble click me 🐍 </button><br /><br />
            <img src="https://via.placeholder.com/100" alt="sample image" onClick={() => handleClick3("Image clicked")}/>
        </>
    );

}

export default Button