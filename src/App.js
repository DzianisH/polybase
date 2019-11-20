import React from 'react';
import Header from './containers/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Panel from './containers/Panel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="display-flex">
        <Sidebar/>
        <Panel/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
