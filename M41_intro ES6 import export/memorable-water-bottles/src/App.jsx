import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch("https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json").then((res) => res.json());


function App() {

  // const bottles =[
  //   {id:1, name:'Pink Nike Bottle', price:250, color: 'pink'},
  //   {id:2, name:'Pink Nike Bottle', price:250, color: 'pink'},
  //   {id:3, name:'Pink Nike Bottle', price:250, color: 'pink'},
  //   {id:4, name:'Pink Nike Bottle', price:250, color: 'pink'},
  // ] 

  // 41-8 3 min 

  return (
    <>
      <h1>Buy awesome water bottle</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
      
    </>
  )
}

export default App
