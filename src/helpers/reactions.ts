// import { Element } from "./constants";

export interface Reaction {
  formula: string;
  name: string;
  description: string;
}

type reactantsType = Record<string, Reaction>;

export const reactions: reactantsType = {
  "s+o+u": {
    formula: "S+O+U",
    name: "SOU Story",
    description:
      "This reaction represents your journey through Southern Oregon University — symbolizing your foundational growth in science and your academic transformation.",
  },
  code: {
    formula: "C+O+D+E",
    name: "Code Reaction",
    description:
      "A powerful combination representing your passion for software development!",
  },
  "s+o+u+bi": {
    formula: "S+O+U+Bi",
    name: "Capstone",
    description: "Capstone research project with Anna",
  },
  // Add more here...
};
