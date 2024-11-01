import React from "react";

import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

function App() {
  document.title = "Riyadh Rahman";
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
