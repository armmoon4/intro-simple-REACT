import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import { Suspense } from 'react';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())

const fetchFriend = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}
function App() {

  const freindsPromise = fetchFriend(); 

  function handleClick() {
    alert("i am clicked")
  }

  const handleClick3 = () => {
    alert("alert 3");
  }

  return (
    <>
      <h1>Vite + React</h1>

{/* 
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

{/* start from 39-7 */}

      <Suspense fallback={<h3>friendss are coming for treat</h3>}>
        <Friends freindsPromise = {freindsPromise}></Friends>
      </Suspense>



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
