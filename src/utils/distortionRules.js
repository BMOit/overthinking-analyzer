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
  {
  type: "Overgeneralization",

  test: (text) => {
    const match = text.match(
      /(always|never|everyone|nobody|everything|nothing|all the time|completely|totally)/
    );

    return match
      ? {
          matchedWord: match[0]
        }
      : false;
  },

  explanation: (word) =>
    `The word "${word}" suggests this is true without any exceptions.`,

  suggestion:
    "Is this truly true in every single case? Can you think of even one exception?"
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
      "You are predicting the worst possible outcome without considering more realistic possibilities.",
    suggestion:
      "What is the most realistic outcome? If the worst happened, how would you actually handle it?"
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
      "You are turning a situation or mistake into a negative label about who you are as a person.",
    suggestion:
      "Does this single moment truly define your entire identity?"
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
      "You are assuming you know what others are thinking without clear evidence.",
    suggestion:
      "What other explanations could exist? Is there proof of what they think?"
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