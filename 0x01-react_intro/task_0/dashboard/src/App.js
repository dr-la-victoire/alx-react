import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <section>
      <header className="App-header">
        <img src={logo} />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </fieldset>
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </section>
  );
}

export default App;
