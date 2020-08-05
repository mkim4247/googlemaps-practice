import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

componentDidMount(){
  let apiKey = process.env.REACT_APP_API_KEY

  fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=${apiKey}`)
  .then(res => res.json())
  .then(json => console.log(json))

}
render(){
  console.log(process.env.REACT_APP_API_KEY)

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
