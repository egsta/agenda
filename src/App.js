import './App.css';
import Logo from './componentes/Logo';
import ListaTareas from './componentes/ListaTareas';


function App() {
  
  return (
    <div className="App">
     <Logo />

      <div className="contendor-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas />

      </div>
    </div>
  );
}

export default App;
