import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <div className='app'>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
};

export default App;