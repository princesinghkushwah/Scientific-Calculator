import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">
    <h1 style={{backgroundColor:'lightBlue' ,width:'400px', marginLeft:'440px'}}>Todo App</h1>
       <Todo/>
    </div>
  );
}

export default App;
