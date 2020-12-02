import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
