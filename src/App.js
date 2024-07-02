
import './App.css';
import FormComponent from './FormComponent';
import Counter from './counter';
import TodoList from './todolist';
import ValidationForm from './validationform';

function App() {
  return (
    <div className="App">
    
    
      <TodoList />
      <h1> form component app</h1>
      <FormComponent />
      <h2>Validation form app</h2>
      <ValidationForm /> 
     <Counter />
    </div>
  );
}

export default App;
