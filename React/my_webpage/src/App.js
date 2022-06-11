import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import PageHeader from './components/PageHeader.js';
import PageBody from './components/PageBody.js';
import TopMenu from './components/TopMenu';

function App() {

  return (
    <div className="App">
      <TopMenu />
      <div id="body-start">
        <PageHeader />
        <PageBody />
      </div>
    </div>
  );
}

export default App;