import "./App.css";
import ThoughtInput from "./components/ThoughtInput";

function App() {
  return (
    <div className="app-container">
      <div className="app-title">Overthinking Analyzer</div>
      <div className="app-subtitle">
        Identify cognitive distortions in your thoughts.
      </div>
      <ThoughtInput />
    </div>
  );
}

export default App;