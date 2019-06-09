import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Post from './Post.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Post" component={Post} />
            {/* <Route exact path="/Game" component={Game} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;