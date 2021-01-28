import React, { useState, useEffect } from 'react'

import Button from './components/Button/Button'
import Input from './components/Input/Input'

import './App.css'

function App() {  

  buttonPressed = () => {
    console.log('Hello');
  }

  return (
    <form className={'grid-container'}>
      <input type="text" readOnly={true} className={'input-label'} />
      
      <Button name={7} clicked={this.buttonPressed}/>
      <Button name={8} />
      <Button name={9} />
      <Button name={'x'} />
      <Button name={4} />
      <Button name={5} />
      <Button name={6} />
      <Button name={'-'} />
      <Button name={1} />
      <Button name={2} />
      <Button name={3} />
      <Button name={'+'} />
      <Button name={'[]'} />
      <Button name={0} />
      <Button name={'.'} />
      <Button name={'='} />
    </form>
  );
}

export default App;
