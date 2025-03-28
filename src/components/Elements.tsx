import { useState } from "react";
import ElementModal from "./ElementModal";

// Define types for the elements we'll display in the periodic table
interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  chemicalGroup: string;
}

const chemicalGroupBackGroundColor: { [key: string]: string } = {
    hydrogen: 'linear-gradient(110deg, rgba(12, 129, 84, 0.99), rgba(12, 129, 84, 0.45))',
    nonmetal: 'linear-gradient(110deg, rgba(255, 0, 85, 0.99), rgba(255, 0, 85, 0.39))',
    alkaliMetal: 'linear-gradient(110deg, rgba(240, 166, 7, 0.91), rgba(221, 165, 11, 0.47))',
    alkalineEarthMetal: 'linear-gradient(110deg, rgb(255, 123, 0), rgba(233, 115, 18, 0.54))',
    metalloid: 'linear-gradient(110deg, rgb(145, 141, 141), rgba(45, 141, 141, 0.32))',
    transitionMetal: 'linear-gradient(110deg, rgb(0, 89, 255), rgba(0, 110, 255, 0.6))',
    postTransitionMetal: 'linear-gradient(110deg, rgb(1, 0, 5), rgba(1, 0, 5, 0.49))',
    halogen: 'linear-gradient(110deg, rgb(0, 162, 255), rgba(0, 162, 255, 0.47))',
    nobleGas: 'linear-gradient(110deg, rgb(135, 0, 255), rgba(136, 0, 255, 0.45))',
    lanthanides: 'linear-gradient(110deg, rgb(243, 78, 12), rgba(255, 60, 0, 0.35))',
    actinides: 'linear-gradient(110deg, rgba(69, 206, 34, 0.98), rgba(68, 206, 34, 0.56))'
  }

const firstRowElements: Element[] = [
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, chemicalGroup: 'hydrogen' },
  { symbol: "He", name: "Helium", atomicNumber: 2, chemicalGroup: 'nobleGas' },
];

const secondRowElementsFirstTwo: Element[] = [
    { symbol: "Li", name: "Lithium", atomicNumber: 3, chemicalGroup: 'alkaliMetal'  },
    { symbol: "Be", name: "Beryllium", atomicNumber: 4, chemicalGroup: 'alkalineEarthMetal' },
    { symbol: "Na", name: "Sodium", atomicNumber: 11, chemicalGroup: 'alkaliMetal' },
    { symbol: "Mg", name: "Magnesium", atomicNumber: 12, chemicalGroup: 'alkalineEarthMetal' },
];

const secondRowElements: Element[] = [
  { symbol: "B", name: "Boron", atomicNumber: 5, chemicalGroup: 'metalloid' },
  { symbol: "C", name: "Carbon", atomicNumber: 6, chemicalGroup: 'nonmetal' },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, chemicalGroup: 'nonmetal' },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, chemicalGroup: 'nonmetal' },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, chemicalGroup: 'halogen' },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, chemicalGroup: 'nobleGas' },
  { symbol: "Al", name: "Aluminum", atomicNumber: 13, chemicalGroup: 'postTransitionMetal' },
  { symbol: "Si", name: "Silicon", atomicNumber: 14, chemicalGroup: 'metalloid' },
  { symbol: "P", name: "Phosphorus", atomicNumber: 15, chemicalGroup: 'nonmetal' },
  { symbol: "S", name: "Sulfur", atomicNumber: 16, chemicalGroup: 'nonmetal' },
  { symbol: "Cl", name: "Chlorine", atomicNumber: 17, chemicalGroup: 'halogen' },
  { symbol: "Ar", name: "Argon", atomicNumber: 18, chemicalGroup: 'nobleGas' },
];

const elements: Element[] = [
  { symbol: "K", name: "Potassium", atomicNumber: 19, chemicalGroup: 'alkaliMetal' },
  { symbol: "Ca", name: "Calcium", atomicNumber: 20, chemicalGroup: 'alkalineEarthMetal' },
  { symbol: "Sc", name: "Scandium", atomicNumber: 21, chemicalGroup: 'transitionMetal' },
  { symbol: "Ti", name: "Titanium", atomicNumber: 22, chemicalGroup: 'transitionMetal' },
  { symbol: "V", name: "Vanadium", atomicNumber: 23, chemicalGroup: 'transitionMetal' },
  { symbol: "Cr", name: "Chromium", atomicNumber: 24, chemicalGroup: 'transitionMetal' },
  { symbol: "Mn", name: "Manganese", atomicNumber: 25, chemicalGroup: 'transitionMetal' },
  { symbol: "Fe", name: "Iron", atomicNumber: 26, chemicalGroup: 'transitionMetal' },
  { symbol: "Co", name: "Cobalt", atomicNumber: 27, chemicalGroup: 'transitionMetal' },
  { symbol: "Ni", name: "Nickel", atomicNumber: 28, chemicalGroup: 'transitionMetal' },
  { symbol: "Cu", name: "Copper", atomicNumber: 29, chemicalGroup: 'transitionMetal' },
  { symbol: "Zn", name: "Zinc", atomicNumber: 30, chemicalGroup: 'transitionMetal' },
  { symbol: "Ga", name: "Gallium", atomicNumber: 31, chemicalGroup: 'postTransitionMetal' },
  { symbol: "Ge", name: "Germanium", atomicNumber: 32, chemicalGroup: 'metalloid' },
  { symbol: "As", name: "Arsenic", atomicNumber: 33, chemicalGroup: 'metalloid' },
  { symbol: "Se", name: "Selenium", atomicNumber: 34, chemicalGroup: 'nonmetal' },
  { symbol: "Br", name: "Bromine", atomicNumber: 35, chemicalGroup: 'halogen' },
  { symbol: "Kr", name: "Krypton", atomicNumber: 36, chemicalGroup: 'nobleGas' },
  { symbol: "Rb", name: "Rubidium", atomicNumber: 37, chemicalGroup: 'alkaliMetal' },
  { symbol: "Sr", name: "Strontium", atomicNumber: 38, chemicalGroup: 'alkalineEarthMetal' },
  { symbol: "Y", name: "Yttrium", atomicNumber: 39, chemicalGroup: 'transitionMetal' },
  { symbol: "Zr", name: "Zirconium", atomicNumber: 40, chemicalGroup: 'transitionMetal' },
  { symbol: "Nb", name: "Niobium", atomicNumber: 41, chemicalGroup: 'transitionMetal' },
  { symbol: "Mo", name: "Molybde.", atomicNumber: 42, chemicalGroup: 'transitionMetal' },
  { symbol: "Tc", name: "Technetium", atomicNumber: 43, chemicalGroup: 'transitionMetal' },
  { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, chemicalGroup: 'transitionMetal' },
  { symbol: "Rh", name: "Rhodium", atomicNumber: 45, chemicalGroup: 'transitionMetal' },
  { symbol: "Pd", name: "Palladium", atomicNumber: 46, chemicalGroup: 'transitionMetal' },
  { symbol: "Ag", name: "Silver", atomicNumber: 47, chemicalGroup: 'transitionMetal' },
  { symbol: "Cd", name: "Cadmium", atomicNumber: 48, chemicalGroup: 'transitionMetal' },
  { symbol: "In", name: "Indium", atomicNumber: 49, chemicalGroup: 'postTransitionMetal' },
  { symbol: "Sn", name: "Tin", atomicNumber: 50, chemicalGroup: 'postTransitionMetal' },
  { symbol: "Sb", name: "Antimony", atomicNumber: 51, chemicalGroup: 'metalloid' },
  { symbol: "Te", name: "Tellurium", atomicNumber: 52, chemicalGroup: 'metalloid' },
  { symbol: "I", name: "Iodine", atomicNumber: 53, chemicalGroup: 'halogen' },
  { symbol: "Xe", name: "Xenon", atomicNumber: 54, chemicalGroup: 'nobleGas' },
];

const lanthanidesAndActinides = [
  { symbol: "Ce", name: "Cerium", atomicNumber: 57, chemicalGroup: 'lanthanides' },
  { symbol: "Pr", name: "Praseo.", atomicNumber: 58, chemicalGroup: 'lanthanides' },
  { symbol: "Nd", name: "Neody.", atomicNumber: 59, chemicalGroup: 'lanthanides' },
  { symbol: "Pm", name: "Prometh.", atomicNumber: 60, chemicalGroup: 'lanthanides' },
  { symbol: "Sm", name: "Samarium", atomicNumber: 61, chemicalGroup: 'lanthanides' },
  { symbol: "Eu", name: "Europium", atomicNumber: 62, chemicalGroup: 'lanthanides' },
  { symbol: "Gd", name: "Gadolin.", atomicNumber: 63, chemicalGroup: 'lanthanides' },
  { symbol: "Tb", name: "Terbium", atomicNumber: 64, chemicalGroup: 'lanthanides' },
  { symbol: "Dy", name: "Dyspro.", atomicNumber: 65, chemicalGroup: 'lanthanides' },
  { symbol: "Ho", name: "Holmium", atomicNumber: 66, chemicalGroup: 'lanthanides' },
  { symbol: "Er", name: "Erbium", atomicNumber: 67, chemicalGroup: 'lanthanides' },
  { symbol: "Tm", name: "Thulium", atomicNumber: 68, chemicalGroup: 'lanthanides' },
  { symbol: "Yb", name: "Ytterbium", atomicNumber: 69, chemicalGroup: 'lanthanides' },
  { symbol: "Lu", name: "Lutetium", atomicNumber: 70, chemicalGroup: 'lanthanides' },
  { symbol: "Hf", name: "Hafnium", atomicNumber: 71, chemicalGroup: 'lanthanides' },
  { symbol: "Th", name: "Thorium", atomicNumber: 89, chemicalGroup: 'actinides' },
  { symbol: "Pa", name: "Protact.", atomicNumber: 90, chemicalGroup: 'actinides' },
  { symbol: "U", name: "Uranium", atomicNumber: 91, chemicalGroup: 'actinides' },
  { symbol: "Np", name: "Neptunium", atomicNumber: 92, chemicalGroup: 'actinides' },
  { symbol: "Pu", name: "Plutonium", atomicNumber: 93, chemicalGroup: 'actinides' },
  { symbol: "Am", name: "Americium", atomicNumber: 94, chemicalGroup: 'actinides' },
  { symbol: "Cm", name: "Curium", atomicNumber: 95, chemicalGroup: 'actinides' },
  { symbol: "Bk", name: "Berkelium", atomicNumber: 96, chemicalGroup: 'actinides' },
  { symbol: "Cf", name: "Californium", atomicNumber: 97, chemicalGroup: 'actinides' },
  { symbol: "Es", name: "Einsteinium", atomicNumber: 98, chemicalGroup: 'actinides' },
  { symbol: "Fm", name: "Fermium", atomicNumber: 99, chemicalGroup: 'actinides' },
  { symbol: "Md", name: "Mendelev.", atomicNumber: 100, chemicalGroup: 'actinides' },
  { symbol: "No", name: "Nobelium", atomicNumber: 101, chemicalGroup: 'actinides' },
  { symbol: "Lr", name: "Lawrencium", atomicNumber: 102, chemicalGroup: 'actinides' },
  { symbol: "Rf", name: "Rutherfor.", atomicNumber: 103, chemicalGroup: 'actinides' },
]

const Elments: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <div className="periodic-table-first-row">
        {firstRowElements.map((element, i) => (
          <button
            className="element"
            style={{
              width: "97.5px",
              height: "90px",
              background:
                chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
            }}
            key={element.atomicNumber}
            onClick={() => handleElementClick(element)}
          >
            <span className="element-atomicNumber">{element.atomicNumber}</span>
            <span className="element-symbol">{element.symbol}</span>
            <span className="element-name">{element.name}</span>
          </button>
        ))}
      </div>
      <div className="periodic-table-second_third-row">
        <div className="periodic-table-second_third-row-first-two">
          {secondRowElementsFirstTwo.map((element, i) => (
            <button
              className="element"
              style={{
                height: "90px",
                background:
                  chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
              }}
              key={element.atomicNumber}
              onClick={() => handleElementClick(element)}
            >
              <span className="element-atomicNumber">
                {element.atomicNumber}
              </span>
              <span className="element-symbol">{element.symbol}</span>
              <span className="element-name">{element.name}</span>
            </button>
          ))}
        </div>
        <div className="periodic-table-second_third-row-rest">
          {secondRowElements.map((element, i) => (
            <button
              className="element"
              key={element.atomicNumber}
              onClick={() => handleElementClick(element)}
              style={{
                height: "90px",
                background:
                  chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
              }}
            >
              <span className="element-atomicNumber">
                {element.atomicNumber}
              </span>
              <span className="element-symbol">{element.symbol}</span>
              <span className="element-name">{element.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="periodic-table">
        {elements.map((element, i) => (
          <button
            className="element"
            style={{
              height: "90px",
              padding: element.atomicNumber === 42 ? "5px" : "10px",
              background:
                chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
            }}
            key={element.atomicNumber}
            onClick={() => handleElementClick(element)}
          >
            <span className="element-atomicNumber">{element.atomicNumber}</span>
            <span className="element-symbol">{element.symbol}</span>
            <span className="element-name">{element.name}</span>
          </button>
        ))}
      </div>
      <div className="periodic-table-lanthanidesAndActinides">
        {lanthanidesAndActinides.map((element, i) => (
          <button
            className="element"
            style={{
              height: "90px",
              padding: "5px",
              background:
                chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
            }}
            key={element.atomicNumber}
            onClick={() => handleElementClick(element)}
          >
            <span className="element-atomicNumber">{element.atomicNumber}</span>
            <span className="element-symbol">{element.symbol}</span>
            <span
              className="element-name"
              style={{
                fontSize: element.atomicNumber === 58 ? "12px" : "14px",
              }}
            >
              {element.name}
            </span>
          </button>
        ))}
      </div>
      <ElementModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        element={selectedElement!}
      />
    </div>
  );
};

export default Elments;
