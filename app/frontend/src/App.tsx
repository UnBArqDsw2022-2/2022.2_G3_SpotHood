import "./App.css";
import Routes from "./Routes";
import Navbar from "./Components/navbar";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
      </div>
      
      <UserProvider>
        <div className="Container">
          <Routes />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
