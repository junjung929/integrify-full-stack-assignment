import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/users/:id" />
        <Route exact path="/" component={HomeContainer} />
      </Router>
    </div>
  );
};

export default App;
