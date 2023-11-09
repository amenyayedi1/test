import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Forme } from './Components/Form';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
    <h1>Hello from Apps</h1>
    <button onClick={()=>alert("hello from alert")} >Alert</button>
    <NavBar/>
    <Forme/>
    <Footer/>
    </div>
  );
}

export default App;
