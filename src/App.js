import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import SearchPage from './pages/search-page/search-page';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            {/* home */}
            <Home />
          </Route>
          <Route path='/search'>
            {/* search page (the result page) */}
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
