import ComponentA from "./ComponentA.jsx"
/* 
useContext() = Reacat Hook that allows you to share values
               between multiple levels of components
               without passsing props through each level(ignore prop drilling)

PROVIDER COMPONENT 
1. import {createContext} from 'react';
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}>
    <Child />
   </MyContext.Provider>

CONSUMER COMPONENT 
1. import React, (useContext) from 'react';
    import {MyContext} from './ComponentA.jsx'
2. const value = useContext(MyContext);

*/
function App() {
 return(
  <ComponentA/>
 );
}

export default App
