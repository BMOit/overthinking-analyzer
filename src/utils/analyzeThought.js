import { rules } from "./distortionRules";

export function analyzeThought(text) {
  const lowerText = text.toLowerCase();

  let bestMatch = null;
  let highestScore = 0;

  for (let rule of rules) {
    let score = 0;

    for (let keyword of rule.keywords) {
      if (lowerText.includes(keyword)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = rule;
    }
  }

  if (bestMatch) {
    return {
      type: bestMatch.type,
      explanation: bestMatch.explanation,
      suggestion: bestMatch.suggestion
    };
  }

  return {
    type: "No strong distortion detected",
    explanation: "This thought appears relatively balanced.",
    suggestion: "Try examining it from multiple perspectives."
  };
}