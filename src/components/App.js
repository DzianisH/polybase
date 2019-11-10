import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css'
import Panel from '../containers/Panel';
import Footer from './Footer';

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
