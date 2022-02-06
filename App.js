
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Menu from './Menu';
import MenuItem from "./MenuItem";
import Movies from "./Movies";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch >
    <Route path='/' exact component={Menu} />
    <Route path='/movies'  component={Movies} />
    <Route path='/menuItem/:imdbID' component={MenuItem} />

    
    </Switch>
    </Router>
    </div>
  );
}

export default App;
