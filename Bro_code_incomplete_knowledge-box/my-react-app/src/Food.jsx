
function Food(){

    let fruit1 = "Orange";
    let fruit2 = "Banana";

    return (
        <ul>
            <li>Apple</li>
            <li>{fruit1}</li>
            <li>{fruit2.toUpperCase()}</li>
        </ul>
    );
}

export default Food