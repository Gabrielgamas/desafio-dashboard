import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
import AnalyticsContent from "./components/AnalyticsContent";
import "./styles/components/app.sass";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/analytics" element={<AnalyticsContent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
