import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto Prático para CodePipeline.
        </p>
        <a
          className="App-link"
          href="https://agner.k8sloss.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Treinamentos
        </a>
      </header>
    </div>
  );
}

export default App;
