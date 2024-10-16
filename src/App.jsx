import './App.css'
import Counter from './counter';
import Users from './users';

function App() {

  function handleClick(){
    alert("Hey! you clicked the prothom button");
  }

  const handleClick2 = () => {
    alert("you clicked me again.");
  }
  return (
    <>
      
      <h1>React Core Concept 2</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Again</button>
      <button onClick={() => {alert('Third button clicked.')}}>Button Third</button>
      
    </>
  )
}

export default App
