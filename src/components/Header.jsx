import React from 'react';
import './Header.css'

export default (props) => (
  <header className='Header display-flex' onClick={props.gotoRoot}>
    <h1>Polybase</h1>
    <p className='Header-excuse'>Sorry, UX sucks on mobile devices, but I already working on it =)</p>
  </header>
);
