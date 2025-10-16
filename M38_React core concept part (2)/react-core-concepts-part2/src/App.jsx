import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';

function App() {

  function handleClick() {
    alert("i am clicked")
  }

  const handleClick3 = () => {
    alert("alert 3");
  }

  return (
    <>
      <h1>Vite + React</h1>

    <Users></Users>
{/* module 39-5 done */}
      <Batsman></Batsman>

    <Counter></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={function handleClick2() {
        alert("clicke handle 2")
      }}>click me</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={()=> alert("arrow click 4")}>click me 4</button>

    </>
  )
}

export default App
