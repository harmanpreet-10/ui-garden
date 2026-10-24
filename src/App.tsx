
import React from 'react';
import { Button } from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI Garden</h1>
        <p>Reusable React Component Library</p>

        <div className="button-container">
          <Button text="Default Button" />
          <Button
            text="Green Button"
            backgroundColor="#28a745"
          />
          <Button
            text="Red Button"
            backgroundColor="#dc3545"
          />
          <Button
            text="Disabled Button"
            disabled
          />
        </div>
      </header>
    </div>
  );
}

export default App;
