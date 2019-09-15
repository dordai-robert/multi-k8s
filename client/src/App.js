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
            <p>Fibonacci calculator deployed on <b>Google GKE</b></p>
            <p>react - node - postgres - redis - travis - docker - kubernetes - google kubernetes engine</p>
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
