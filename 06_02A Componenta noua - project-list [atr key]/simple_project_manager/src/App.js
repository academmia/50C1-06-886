import React, { Component } from 'react';
import './App.css';

class App extends Component {
  title = 'Simple Project Manager';

  render() {
    return (
      <main className="col-sm-7 offset-sm-2 pt-3">
          <h1 className="bg-primary p-3 text-white"> { this.title } </h1>
      </main>
    );
  }
}

export default App;
