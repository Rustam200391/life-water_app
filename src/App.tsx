import React from 'react';
import { API } from './API';
import {YMap} from './components/YMaps'
import './App.css';


export function App() {
  return (
    <div className="App">
      <API/>
      <YMap />
    </div>
    
  );
}

 
