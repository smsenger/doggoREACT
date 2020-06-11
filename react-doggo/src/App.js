import React from 'react';
import logo from './logo.svg';
import './App.css';
// import DogImage from './components/DogImage';
import TextInput from './components/TextInput'
import Stepper from './components/Stepper'

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Doggz</h1>
      </header>
        {/* <TextInput /> */}
        <Stepper />
    </div>
  );
}

export default App;
