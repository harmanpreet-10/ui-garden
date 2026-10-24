import React from 'react';
import { Button } from './components/Button/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Table } from './components/Table';
import { TableHeader } from './components/TableHeader';
import { TableRow } from './components/TableRow';
import { TableCell } from './components/TableCell';
import { TableFooter } from './components/TableFooter';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Card } from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI Garden</h1>
        <p>Reusable React Component Library</p>
        <div className="button-container">
          <Button text="Default Button" />
          <Button text="Green Button" backgroundColor="#28a745" />
          <Button text="Red Button" backgroundColor="#dc3545" />
          <Button text="Disabled Button" disabled />
        </div>
        <h2>Component Gallery</h2>
        <div className="garden-gallery">
          <Label text="Label" />
          <Text text="Text component" />
          <Dropdown text="Choose an option" />
          <RadioButton text="Radio button" />
          <Img text="Image preview" />
          <HeroImage text="Hero image" />
          <Card text="Card component" />
          <Table text="Table component" />
          <table><TableHeader text="Table header" /><tbody><TableRow text="Table row" /><tr><TableCell text="Table cell" /></tr></tbody><TableFooter text="Table footer" /></table>
        </div>
      </header>
    </div>
  );
}
export default App;
