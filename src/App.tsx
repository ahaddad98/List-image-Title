import React from 'react';
import './App.css';
import ListItems from './components/ListItems';
import Header from './components/Header';
import { AppProvider } from './provider/appContext';


function App() {
  return (<AppProvider>
    <div className='app'>
      <Header />
      <ListItems />
    </div>
  </AppProvider>
  );
}

export default App;
