import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="main row g-0 border">
        <div className="border col-sm-12 col-md-3"></div>
        <div className="border col-sm-12 col-md-9"></div>
      </div>
    </div>
  );
}

export default App;
