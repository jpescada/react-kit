import React from 'react';
import Header from './Header';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Hello there!" />
        <Button />
      </div>
    );
  }
}

export default App;