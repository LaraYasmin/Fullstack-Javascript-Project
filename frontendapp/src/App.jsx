import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homePage';
import Register from './pages/registerPage';
import Login from './pages/loginPage';
import Verification from './pages/verificationPage';

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
