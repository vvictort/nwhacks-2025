import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import Login from "./Login";
import Home from "./Home";
import Budget from './Budget';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<RedirectPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
