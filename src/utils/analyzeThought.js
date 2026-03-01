// src/utils/analyzeThought.js

import { rules } from "./distortionRules";

export function analyzeThought(inputText) {
  const text = inputText.toLowerCase().trim();

  const detected = [];

  for (let rule of rules) {
    if (rule.test(text)) {
      detected.push({
        type: rule.type,
        explanation: rule.explanation,
        suggestion: rule.suggestion
      });
    }
  }

  if (detected.length > 0) {
    return detected; // return multiple distortions
  }

  return [
    {
      type: "No strong distortion detected",
      explanation: "This thought appears relatively balanced.",
      suggestion: "Try examining it from multiple perspectives."
    }
  ];
}