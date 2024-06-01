import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/home.js';
import Register from './pages/access/register.js';
import Login from './pages/access/login.js';
import Verification from './pages/access/verification.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/verification" component={Verification}/>
      </Switch>
    </Router>
  );
}

export default App;
