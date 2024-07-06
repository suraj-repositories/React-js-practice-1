// React hook : Special function that allows functional components
//              to use react features without writing class components(Since React v16.x)
//              (useState, useEffect, useContext, useReducer, useCallback and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              And a setter function to update its value in vertual DOM.
//              [name, setName]
import MyComponent from "./MyComponent.jsx"
function App() {
 return (
  <MyComponent/>
 );
}

export default App
