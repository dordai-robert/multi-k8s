import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p1><b>Fibonacci calculator</b></p1>
            <p>react - node - postgres - redis - travis - docker - kubernetes - google GKE</p>
            <p> containers for: client, server, redis, postgres, worker(subscribed on redis, makes the fibonacci computing)</p>
            <p><Link to="/"><b>Home</b></Link></p>
            <p><Link to="/otherpage"><b>Other Page</b></Link></p>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
