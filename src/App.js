// import logo from './logo.svg';
// import './App.css';
import {Header,Footer} from "./Header";

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <h1>react js code is load</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
