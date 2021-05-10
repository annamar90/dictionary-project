
import logo from "./SheCodes-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} alt="logo" className="img-fluid"/>
      </header>

      <main>
        <Dictionary />
      </main>

      <footer className="App-footer">
        <small>
        Coded by Anna Marasso
        </small>
      </footer>
      </div>
    </div>
  );
}
