import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';
import ProfileContainer from './containers/ProfileContainer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/users/:id" component={ProfileContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Router>
    </div>
  );
};

export default App;
