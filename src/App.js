import logo from './logo.svg';
import './App.css';
//import Counter from './components/Counter';
// import LoginUseState from './components/LoginUseState';
// import LoginUseReducer from './components/LoginUseReducer';
import TodoListContainer, { todosContext } from './components/container/TodoListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejemplos useReducer</h1>
        {/*<Counter/>*/}
        {/* <LoginUseState/>*/}
         {/*<LoginUseReducer/>*/} 
        <TodoListContainer/>
      </header>
    </div>
  );
}

export default App;
