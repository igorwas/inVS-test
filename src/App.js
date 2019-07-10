import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Page1}/>
      <Route path="/page1" exact component={Page1}/>
      <Route path="/page2" exact component={Page2}/>
      <Route path="/page3" exact component={Page3}/>
    </Router>
  );
}

export default App;
