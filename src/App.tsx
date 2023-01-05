import React from 'react';
import './App.css';
import Background from './Components/Background';
import Home from './Pages/Home';
import MainRoutes from './Routes';

function App() {
  return (
    <main className='main'>
      <MainRoutes/>
    </main>
  );
}

export default App;
