import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <>
      <div>
        <Header />
        <h1>Dashboard</h1>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
