
import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {
  const actors = ['bappa' , 'omar sunny' , 'hero alom' , 'jasim' , 'anwar'];
  const singer = [
    {id: 1 , name: 'Dr. Mahfuz' , age: 68},
    {id: 2 , name: 'Rahim' , age: 48},
    {id: 3 , name: 'Karim' , age: 38}
  ]

  return (
    <>

      <h1>React core component</h1>

      {
        singer.map(singer => <Singer singer={singer}></Singer>)
      }

      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }

{/* 
      <ToDo task="Learn React" isDone={true} time = "345"></ToDo>
      <ToDo task="Revice JS" isDone={false}></ToDo>
      <ToDo task="TAKE A SHOUWER" isDone={true}></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name=" Rajon" tech="js"></Developer>
      <Developer name=" Mojumder" tech= "python"></Developer>
      <Developer name=" Ardha" tech = "tensorflow"></Developer>
      <Device name="apple" config="45"></Device>
      <Device name="samsung" config="65"></Device>
      <Player name="tamim" runs="4000"></Player>
      <Player name="musshi" runs="4000"></Player>
      <Salami event="Roja Eid" amount="200"></Salami>
      <Salami event="Passed" amount="100"></Salami> */}



    </>
  )
}


function Salami({ event, amount }) {
  return (
    <div className='students'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

function Player({ name, runs }) {
  return (
    <div className='students'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Developer(props) {
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer:{props.name} </h3>
      <p>Tech: {props.tech} </p>
    </div>
  )
}

function Person() {
  const age = 18;
  const name = 'jolil';

  const personStyle = {
    color: 'blue'
  }

  return (
    <p style={personStyle}>i am a person: {name} {age}</p>
  )
}

function Sports() {
  return (
    <div>
      <h3>cricket</h3>
      <p >playing and loosing</p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}

function Device(devi) {
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h2 style={{
        color: 'red'
      }}>Device:{devi.name}</h2>
      <p className=''>Config: {devi.config}</p>
    </div>
  )
}

export default App
