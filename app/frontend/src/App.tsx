import './App.css';
import Routes from './Routes';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className='App'>

      <div className='Header'>
        <Navbar/>
      </div>

      <div className='Container'>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
