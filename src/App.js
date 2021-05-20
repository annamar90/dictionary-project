
import logo from "./dictionary-icon.png";
import bot from "./pcbot-icon2.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} alt="logo" className="img-fluid"/>
      <h3><p className="InfoApp">WordWide</p></h3>
      <h2><p className="SubApp">Dictionary</p></h2>
      </header>

      <main>
        <Dictionary defaultKeyword="welcome"/>
      </main>

      <footer className="App-footer">
        <img src={bot} alt="bot" className="img-pcbot-icon2"/>
        <small>
        Coded by Anna Marasso
        <br/>
        <a href="https://github.com/annamar90/dictionary-project" className="githublink">See it on GitHub✨</a>
        </small>
      </footer>
      </div>
    </div>
  );
}
