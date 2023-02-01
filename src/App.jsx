import React, { useState, useEffect } from 'react';
import './app.css'
import { Game } from './components/game';
import { getCard } from './back/api';

function App() {
  return (
    
    <div className="table">
      <Game />
    </div>
      
  )
}

export default App
