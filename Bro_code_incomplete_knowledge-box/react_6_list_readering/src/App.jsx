import List from "./List.jsx"

function App() {

  let fruits = [
    { id: 1, name: "Apple", calories: 96 },
    { id: 2, name: "Coconut", calories: 105 },
    { id: 3, name: "Kiwi", calories: 159 },
    { id: 4, name: "Orange", calories: 37 },
    { id: 5, name: "Banana", calories: 30 },
  ];

  let vegetables = [
    { id: 6, name: "Apple", calories: 96 },
    { id: 7, name: "Coconut", calories: 105 },
    { id: 8, name: "Kiwi", calories: 159 },
    { id: 9, name: "Orange", calories: 37 },
    { id: 10, name: "Banana", calories: 30 },
  ];

  return (
    <>
      {/* {fruits.length > 0 ? <List items={fruits} catagory="Fruits" /> : null} */}
      {/* Work same as ternary operator with less code */}
      {fruits.length > 0 &&  <List items={fruits} catagory="Fruits" />}
      {vegetables.length > 0 ? <List items={vegetables} catagory="Vegetables" /> : null}
    </>
  );
}

export default App
