import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/Home/Home'
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
