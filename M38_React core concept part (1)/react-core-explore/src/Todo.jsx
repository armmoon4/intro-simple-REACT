// export default function ToDo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task , isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }

// }

// conditional rendering 3 ternary

// export default function ToDo({task , isDone, time = 0}){
//     return isDone ?
//     <li>Done: {task} time
//     : {time} </li> : <li>Not Done: {task}</li>
// }

// conditional rendering 4 &&
// export default function ToDo({task , time , isDone}){
//     return isDone && <li>Done Task: {task} time: {time}</li>
// }


// conditional rendering 5 ||
export default function ToDo({task , time , isDone}){
    return isDone || <li>Done Task: {task} time: {time}</li>
}



