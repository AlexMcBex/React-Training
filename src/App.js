import './App.css';
import FruitContainer from './components/FruitContainer'

function App() {
  return (
    <div className="App">
      <FruitContainer fruit={['apple', 'mango', 'banana', 'coconut']}/>
    </div>
  );
}

export default App;
