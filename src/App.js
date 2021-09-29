import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import CalculatorPage from './components/pages/CalculatorPage';
import Quote from './components/pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/Math-Magicians" exact component={Home} />
            <Route path="/" exact component={Home} />
            <Route path="/calculator" exact component={CalculatorPage} />
            <Route path="/quote" exact component={Quote} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;