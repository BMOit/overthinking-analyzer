import { rules } from "./distortionRules";

export function analyzeThought(inputText) {
  const text = inputText.toLowerCase().trim();
  const detected = [];

  for (let rule of rules) {
    const result = rule.test(text);

    if (result) {
      detected.push({
        type: rule.type,
        explanation:
          typeof rule.explanation === "function"
            ? rule.explanation(result.matchedWord)
            : rule.explanation,
        suggestion: rule.suggestion
      });
    }
  }

  if (detected.length > 0) return detected;

  return [
    {
      type: "No strong distortion detected",
      explanation: "Your statement appears balanced and realistic.",
      suggestion: null
    }
  ];
}