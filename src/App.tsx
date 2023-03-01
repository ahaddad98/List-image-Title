import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';
import Header from './components/Header';

function App() {
  return (<div className='app'>
    <Header title="List Images" carousel={true} infiniteScroll={true} pagination={true}/>
    <ListItems />
  </div>
  );
}

export default App;
