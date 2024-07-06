import PropType from "prop-types"


function Student(props){
    return(
        <div className="student-card">
            <p>Name : {props.name} </p>
            <p>Age : {props.age}</p>
            <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// DEFAULT VALUE OF PROPS

// function Student({name="Guest", age=0, isStudent = false}){
//     return(
//         <div className="student-card">
//             <p>Name : {name} </p>
//             <p>Age : {age}</p>
//             <p>isStudent : {isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }

// IF YOU ARE USING PROPS TRY TO USE PROPTYPES FOR DEBUGGING PERPOSES
Student.propTypes = {
    name : PropType.string,
    age : PropType.number,
    isStudent : PropType.bool
}

export default Student