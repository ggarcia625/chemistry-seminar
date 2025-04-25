import code from "../../public/code.png";
import lamResearch1 from "../../public/lam_research1.png";
import lamResearch2 from "../../public/lam_research2.png";
import lamResearch3 from "../../public/lam_research3.png";
import slowNeutron from "../../public/slow_neutrons.png";
import pic1 from "../../public/pic1.jpg";
import pic2 from "../../public/pic2.png";
import pic3 from "../../public/pic3.png";
import portBachPay from '../../public/post_bach_pay.png'
import reactIcon from "../../public/react-svgrepo-com.svg";
import SOAR from "../../public/SOAR_POSTER.png";
import viteIcon from "../../public/vite-svgrepo-com.svg";

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
    description:
      "Capstone research project with Anna. Looking for places where I thought I could live first for my graduate and job apps",
    photos: [SOAR],
    atomicNums: [16, 8, 92, 83],
  },
  "pu+be+c": {
    formula: "Pu+Be+C",
    name: "LANL Nuclear Weapons Manufacturing",
    description:
      "Plutonium, Moderators, Beryllium, and CBD. Slowed down (thermal) neutrons result in higher critically chance. Thermal neutrons lose 99.9999% of kinetic energy, from 20000 km/s to 2.2 km/s. 0.08 mm dispersed into the area of a football field",
    photos: [pic1, pic2, pic3, slowNeutron],
    atomicNums: [94, 4, 6],
  },
  "si+ga": {
    formula: "Si+Ga",
    name: "Lam Research",
    description:
      "Semiconductor machinery manufactoring. Coding up internal manufacturing dashboards for technicians",
    photos: [lamResearch1, lamResearch2, lamResearch3],
    atomicNums: [14, 31],
  },
  "li+v+i+te": {
    formula: "Li+V+I+Te",
    name: "React + Vite + MERN",
    description:
      "Modern web development is mostly React.js based using Vite as the frame work. MongoDB, Express.js, React.js, Node.js (MERN) tech stack building document generation systems of record to replace ambiguous inefficient paper forms. Post-Bachelor's pay rate: $32.93/hr | $68,490/yr",
    photos: [reactIcon, viteIcon, code, portBachPay],
    atomicNums: [14, 31],
  },
};
