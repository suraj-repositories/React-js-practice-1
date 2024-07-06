import MyComponent from "./MyComponent"

/*
useState() = Re-renders the component when the state value changes

useRef() = "use Reference" does no tcause re-renders when its value changes.
           1. Accessing/Interacting with DOM elements
           2. Handling Focus, Animations, and transitions
           3. Managing Timer and intervals

useRef hook has a single property named 'current'
*/

function App() {
  return(
    <MyComponent/>
  );
}

export default App
