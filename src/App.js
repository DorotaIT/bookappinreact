import React from 'react';
import './App.css';
import { BookSearchPage } from './components/BookSearchPage';
import { SingleBookPage } from '../src/Pages/SingleBookPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/book/:isbn" component={SingleBookPage} />
          <Route path="/" component={BookSearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;