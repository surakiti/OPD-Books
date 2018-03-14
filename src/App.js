import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">NEWS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">LOGIN</a>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default App;
