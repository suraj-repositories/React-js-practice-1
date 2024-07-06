import PropType from 'prop-types';

function List({items = [], catagory = "Catagory"}) {            // DEFAULT VALUE SETUP

    // fruits.sort((a, b) => a.name.localeCompare(b.name));       // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name));       // REVERSE ALPHABETICAL ORDER
    // fruits.sort((a, b) => a.calories - b.calories);            // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories);            // REVERSE NUMERIC

    // let lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // let highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    let listFruits = items.map((item) => <li key={item.id}>
                                    {item.name} : &nbsp;{item.calories}
                                </li>);

    return (
        <>
            <h2>{catagory}</h2>
            <ol>{listFruits}</ol>
        </>
    );
}

List.propTypes = {
    catagory : PropType.string,
    items : PropType.arrayOf(PropType.shape({
        id : PropType.number,
        name : PropType.string,
        calories : PropType.number,
    }))
};

export default List