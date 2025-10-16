import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import { Suspense } from 'react';
import Posts from './Posts';
import Photos from './Photos';

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())

// const fetchFriend = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     return res.json();
// }

// const fetchPost = async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

const Photosfetch = async()=> {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    return res.json();
}

function App() {


  // const freindsPromise = fetchFriend(); 
  // const postPromise = fetchPost();
  const photoPromise = Photosfetch();
  function handleClick() {
    alert("i am clicked")
  }

  const handleClick3 = () => {
    alert("alert 3");
  }

  return (

    <>
      <h1>Vite + React</h1>

<Suspense fallback={<h2>Loading photos</h2>}>

  <Photos photoPromise={photoPromise}></Photos>
  
   </Suspense>

{/* 
    <Suspense fallback={<h2>Posts are coming...</h2>}>
      <Posts postPromise = {postPromise}></Posts>
    </Suspense> */}


{/* 
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}


      {/* <Suspense fallback={<h3>friendss are coming for treat</h3>}>
        <Friends freindsPromise = {freindsPromise}></Friends>
      </Suspense> */}



      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={function handleClick2() {
        alert("clicke handle 2")
      }}>click me</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => alert("arrow click 4")}>click me 4</button>

    </>
  )
}

export default App
