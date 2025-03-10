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
      <div className="subscriptionForm">
        <div className="subscriptionTitle">
          <a href="https://forms.gle/9XKZJBEhjx3EKruP6" target="_blank">Subscribe for updates »</a>
          <a href="https://app.practical-cm.com/" target="_blank">More metrics and benchmarks »</a>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;