import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Stack from './components/Stack';
import Queue from './components/Queue';
import List from './components/List';
import Finobacci from './components/Finobacci';
import Factorial from './components/Factorial';
import Hanoi from './components/Hanoi';


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={ Finobacci } />
      <Route path='/stack' component={ Stack } />
      <Route path='/queue' component={ Queue } />
      <Route path='/factorial' component={ Factorial } />
      <Route path='/list' component={ List } />
      <Route path='/hanoi' component={ Hanoi } />
    </BrowserRouter>
  );
}

export default App;
