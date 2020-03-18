import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CourseList from './features/course'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
      <main>
        <span>
          <span>Courses: </span>
          <CourseList />
        </span>
      </main>
    </div>
  );
}

export default App;
