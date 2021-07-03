import "./App.css";

function App() {
  return (
    <div>
      <div className="header">Header</div>
      <div className="main row g-0 border">
        <div className="border col-sm-12 col-md-3">
          <div>Recent Cities</div>
        </div>
        <div className="border col-sm-12 col-md-9">
          <div className="search border">Search</div>
          <div className="weather border">Weather Data</div>
        </div>
      </div>
    </div>
  );
}

export default App;
