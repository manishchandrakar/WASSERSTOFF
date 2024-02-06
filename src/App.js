// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Api from "./components/Fetch/api";
import Overview from "./components/Overview/Overview";
import BubbleChart from "./components/Overview/graph/bubbleChart";
import ConstTotalEarning from "./components/Overview/TotalEarning/TotalEarning";

const Home = () => {
  return <div>Home Page</div>;
};

function Footer() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
      Developed and Designed by {" "}
      <a href="https://www.linkedin.com/in/manish-chandrakar-23392b183/" target="_blank" rel="noopener noreferrer">Manish Chandrakar</a>{" "}
      <a href="https://github.com/manishchandrakar/" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/bubble" element={<BubbleChart/>} />  
          <Route path="/total" element={<ConstTotalEarning/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
