import "./App.css";
// npm install react-router-dom --save
import FeaturedMetrics from './components/FeaturedMetrics'
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="container">
        <FeaturedMetrics />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;