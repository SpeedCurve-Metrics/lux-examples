import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // LUX START
    // Set the page label so that the LUX data can be easily grouped by page.
    window.LUX.label = 'home';

    // Manually send the beacon once the component is mounted. If you have many
    // top-level components, you might want to consider abstracting this into a
    // higher-order component like TrackedComponent in the README.
    window.LUX.send();
    // LUX END
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
