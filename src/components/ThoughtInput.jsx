import { useState } from "react";
import { analyzeThought } from "../utils/analyzeThought";

export default function ThoughtInput() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const analysis = analyzeThought(text);
    setResult(analysis);
  };

  return (
    <div>
      <textarea
        rows="4"
        style={{ width: "100%", marginTop: "20px" }}
        placeholder="Write your thought..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        style={{ marginTop: "10px" }}
      >
        Analyze
      </button>

      {result && result.map((item, index) => (
        <div key={index} style={{ marginTop: "20px" }}>
          <h3>{item.type}</h3>
          <p>{item.explanation}</p>
          <p><strong>Reframe:</strong> {item.suggestion}</p>
        </div>
      ))}
    </div>
  );
}