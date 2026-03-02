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

      {result && (
        <div style={{ marginTop: "30px" }}>
    
          <h2>Your Thought</h2>
          <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
            "{text}"
          </p>

          {result.map((item, index) => (
            <div key={index} style={{ marginBottom: "25px" }}>
              <h3>{item.type}</h3>
              <p>{item.explanation}</p>

              {item.suggestion && (
                <p>
                  <strong>Reframe:</strong> {item.suggestion}
                </p>
              )}
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}