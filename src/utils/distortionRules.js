// src/utils/distortionRules.js

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

const absoluteWords = [
  "always",
  "never",
  "everyone",
  "nobody",
  "everything",
  "nothing",
  "completely",
  "totally"
];

const shouldWords = [
  "should",
  "shouldn't",
  "must",
  "mustn't",
  "ought to"
];

export const rules = [
  {
    type: "Overgeneralization",
    test: (text) => {
      return absoluteWords.some(word => text.includes(word));
    },
    explanation:
      "This thought uses absolute language and assumes something is true in all situations.",
    suggestion:
      "Is this really true in every single case? What evidence suggests otherwise?"
  },

  {
    type: "Catastrophizing",
    test: (text) => {
      return (
        text.includes("what if") ||
        text.includes("ruin") ||
        text.includes("disaster") ||
        text.includes("worst") ||
        text.includes("everything will go wrong")
      );
    },
    explanation:
      "This thought predicts the worst possible outcome without considering more realistic possibilities.",
    suggestion:
      "What is the most realistic outcome instead of the worst one?"
  },

  {
    type: "Self-Labeling",
    test: (text) => {
      if (!text.startsWith("i am")) return false;
      return negativeIdentityWords.some(word =>
        text.includes(word)
      );
    },
    explanation:
      "This thought turns a situation or mistake into a negative identity label.",
    suggestion:
      "Does one action or mistake truly define your entire identity?"
  },

  {
    type: "Mind Reading",
    test: (text) => {
      return (
        text.includes("they think") ||
        text.includes("they must think") ||
        text.includes("everyone thinks") ||
        text.includes("people think")
      );
    },
    explanation:
      "This thought assumes you know what others are thinking without evidence.",
    suggestion:
      "How can you know for sure what they are thinking? What are other possible explanations?"
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
      "This thought assumes that feelings reflect objective reality.",
    suggestion:
      "Feelings are important, but what objective evidence supports this conclusion?"
  },

  {
    type: "Should Statements",
    test: (text) => {
      return shouldWords.some(word => text.includes(word));
    },
    explanation:
      "This thought imposes rigid rules or expectations on yourself or others.",
    suggestion:
      "What would a more flexible or compassionate expectation look like?"
  }
];