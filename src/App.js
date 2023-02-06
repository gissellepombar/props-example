import './App.css';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Props!</h1>
        <Greeting name="Gisselle"/>
        <Greeting name="Gisele"/>
      </header>
    </div>
  );
}

export default App;
