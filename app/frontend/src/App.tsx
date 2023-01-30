import "./App.css";
import Routes from "./Routes";
import Navbar from "./Components/navbar";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="Header">
          <Navbar />
        </div>

        <div className="Container">
          <Routes />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
