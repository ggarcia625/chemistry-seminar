// import { Element } from "./constants";
import SOAR from '../../public/SOAR_POSTER.png'
import pic1 from '../../public/pic1.jpg'
import pic2 from '../../public/pic2.png'
import pic3 from '../../public/pic3.png'

export interface Reaction {
  formula: string;
  name: string;
  description: string;
  photos: string[];
  atomicNums: number[];
}

type reactantsType = Record<string, Reaction>;

export const reactions: reactantsType = {
  "s+o+u+bi": {
    formula: "S+O+U Chemistry Results",
    name: "From Nukes to Code",
    description: 'Capstone research project with Anna.',
    photos: [SOAR],
    atomicNums: [16, 8, 92, 83]
  },
  "pu+be+c": {
    formula: "Pu+Be+C",
    name: "LANL Nuclear Weapons Manufacturing",
    description: "Moderators, Beryllium, and CBD ",
    photos: [pic1, pic2, pic3],
    atomicNums: [94, 4, 6]
  },
  "si+ga": {
    formula: "Si+Ga",
    name: "Lam Research",
    description: "Capstone research project with Anna",
    photos: [SOAR],
    atomicNums: [14, 31]
  },

};
