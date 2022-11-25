import "./styles/styles.scss";

// Components
import Header from "./components/Header/Header.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
