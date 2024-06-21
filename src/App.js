import "./App.css";
// npm install react-router-dom --save
import FeaturedMetrics from './components/FeaturedMetrics'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <FeaturedMetrics />
    </div>
  );
}

export default App;