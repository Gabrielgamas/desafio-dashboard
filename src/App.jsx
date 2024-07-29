import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar className="sidebar" />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
