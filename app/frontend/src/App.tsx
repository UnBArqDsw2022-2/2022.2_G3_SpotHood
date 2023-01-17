import './App.css';
import Routes from './Routes';
import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

const spothoodTheme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  }
});

function App() {
  return (
    <div className='App'>

      {/* <div className='Header' /> */}

      <div className='Container'>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
