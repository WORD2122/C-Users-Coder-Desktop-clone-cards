import './App.css';
import style from './style.css';
import Ciudades from './components/Ciudades';

function App(ciudades) {
  return (
    <div className="App">
      <Ciudades
        ciudades={ciudades}
      />

    </div>
  );
}

export default App;