 
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Header/Navigation'
import NavRoutes from './Components/Header/NavRoutes'

function App() {
  return (
    <div style={{backgroundColor:"#0E0A2A"}} className="App">
        <Router>
        <Navigation></Navigation>
        <NavRoutes></NavRoutes>
        </Router>
    </div>
  );
}

export default App;
