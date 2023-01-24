import React, { useState, useEffect } from 'react';
import Card from './components/card';
import { Embaralhar } from './back/api';
import './app.css'

function App() {
const [Carde, setCard] = useState('a');
  return (
    <>
      <button onClick={(e) => {
         setCard(Embaralhar())
      }}> CLICK</button>
      
      <Card />
    </>
    
  )
}

export default App
