import logo from './Kharkiv.svg';
import './App.css';
import Writers from './Writers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Відомі письменники Харківщини
        </p>
      </header>
      <body>
        <Writers />
      </body>
    </div>
  );
}

export default App;
