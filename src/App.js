import './App.css';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Props!</h1>
        <Greeting name="Gisselle" lastName="Pombar"/>
        <Greeting name="Gisele" lastName="Abzalov"/>
      </header>
    </div>
  );
}

export default App;
