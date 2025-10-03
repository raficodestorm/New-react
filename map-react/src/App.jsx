import React from 'react';
import './App.css'
import Container from './Container';
import Use from './useState';

function App() {
  const habit = ["weakup early", "healthy food","reading", "helping", "sleeping"];

  return (
    <>
      <h1>Hello Map</h1>
        <ul className='list-group text-dark'>
          {habit.map((item)=>(
            <li key={item} className='list-group-item'>{item}</li>
          ))}
      </ul>
      <Container>
        <h2>this is a testing container</h2>
        <p>for data passing via props</p>
      </Container>
      <br />
      <Container>
        <Use/>
      </Container>
    </>
  )
}

export default App
