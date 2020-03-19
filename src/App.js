import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar"
import Data from "./components/Data/Data"
import Linechart from "./components/Linechart/Linechart"

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <Data />
      <Linechart/>
    </div>
  );
}

export default App;
