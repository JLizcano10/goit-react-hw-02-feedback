import { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          fontSize: '30px',
          color: '#010101',
          padding: '20px',
        }}
      >
        <h1>Hola Amigos</h1>
      </div>
    );
  }
}

export default App;
