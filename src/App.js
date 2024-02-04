import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
  return (
    <React.Fragment className="App" >
      <Nav />
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
