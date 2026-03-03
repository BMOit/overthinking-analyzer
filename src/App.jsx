import "./App.css";
import ThoughtInput from "./components/ThoughtInput";

function App() {
  return (
    <>
      <div className="shooting-star"></div>
      <div className="shooting-star-2"></div>
      <div className="shooting-star-3"></div>
      <div className="app-container">
        <h1 className="app-title">Overthinking Analyzer</h1>
        <p className="app-subtitle">
          Identify cognitive distortions in your thoughts.
        </p>

        <div className="glass-card">
          <ThoughtInput />
        </div>
      </div>
    </>
  );
}

export default App;