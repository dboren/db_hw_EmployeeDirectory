import React from "react";
import './App.css';
import Header from './components/Header';
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import API from "./utils/API";

console.log('hi');
console.log("API: ", API);

function App() {

  return (
    
      <div>
        <Header />
        <SearchBar />
        <Main />
      </div>
  );
}

export default App;
