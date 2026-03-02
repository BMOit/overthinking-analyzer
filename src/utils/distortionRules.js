// src/utils/distortionRules.js

const absoluteWords = [
  "always",
  "never",
  "everyone",
  "nobody",
  "everything",
  "nothing"
];

const shouldWords = [
  "should",
  "shouldn't",
  "must",
  "mustn't",
  "ought to"
];

const negativeIdentityWords = [
  "useless",
  "stupid",
  "dumb",
  "worthless",
  "failure",
  "loser",
  "bad person",
  "not good enough"
];

export const rules = [

  // 🔹 Self-Labeling (Pattern Based)
  {
    type: "Self-Labeling",
    test: (text) => {
      const identityPattern = /(i am|i'm|i m|im|i feel)\s+(useless|stupid|dumb|worthless|a failure|a loser|bad)/;
      const match = text.match(identityPattern);
      if (match) {
        return { matchedWord: match[2] };
      }
      return false;
    },
    explanation: (word) =>
      `You're turning a feeling into an identity by using "${word}" as a label.`,
    suggestion:
      "Does one moment or feeling truly define who you are?"
  },

  // 🔹 Overgeneralization
  {
    type: "Overgeneralization",
    test: (text) => {
      const generalPattern = /(always|never|everyone|nobody|everything|nothing)/;
      const match = text.match(generalPattern);
      if (match) {
        return { matchedWord: match[1] };
      }
      return false;
    },
    explanation: (word) =>
      `The word "${word}" suggests something is true in all situations.`,
    suggestion:
      "Is it truly true in every single case? Can you think of one exception?"
  },

  // 🔹 Mind Reading
  {
    type: "Mind Reading",
    test: (text) => {
      const mindPattern = /(everyone thinks|they think|people think)/;
      const match = text.match(mindPattern);
      if (match) {
        return { matchedWord: match[1] };
      }
      return false;
    },
    explanation:
      "You're assuming you know what others think without clear evidence.",
    suggestion:
      "What proof do you actually have about what others are thinking?"
  },

  // 🔹 Catastrophizing
  {
    type: "Catastrophizing",
    test: (text) => {
      const catastrophePattern = /(what if|ruin|disaster|worst|everything will go wrong)/;
      const match = text.match(catastrophePattern);
      if (match) {
        return { matchedWord: match[1] };
      }
      return false;
    },
    explanation:
      "You're predicting a worst-case outcome without considering more realistic possibilities.",
    suggestion:
      "What is the most realistic outcome instead of the worst one?"
  },

  {
    type: "Emotional Reasoning",
    test: (text) => {
      return (
        text.includes("i feel like") ||
        text.includes("i feel that") ||
        text.includes("because i feel")
      );
    },
    explanation:
      "You are treating your feelings as proof that something is objectively true.",
    suggestion:
      "What objective evidence supports this belief?"
  },

  {
    type: "Should Statements",
    test: (text) => {
      return shouldWords.some(word => text.includes(word));
    },
    explanation:
      "You are placing rigid expectations on yourself or others using words like 'should' or 'must'.",
    suggestion:
      "What would a more flexible or compassionate expectation look like?"
  }
];