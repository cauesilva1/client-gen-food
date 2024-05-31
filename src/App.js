import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button" className="botaoLogin">Login with google</button>
      </header>
    </div>
  );
}

export default App;
