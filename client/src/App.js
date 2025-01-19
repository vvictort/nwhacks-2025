import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import Login from "./Login";
import Home from "./Home";
import Home2 from "./Home2";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<RedirectPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="home" element={<Home2 />} />
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
