import Student from "./Student.jsx"

/*
props : read only properties that are shared between components.
        a parent component can send data to a child component
        <Component key=value />
*/


function App() {
   return(
    <>
      <Student name="Shubham kumar" age={22} isStudent={true}/>
      <Student name="Tushar Srivastav" age={23} isStudent={false}/>
      <Student name="Saurabh Rathore" age={21} isStudent={true}/>

      {/* DEFAULT PROP EXAMPLE */}
      {/* <Student/> */}
    </>
   );
}

export default App
