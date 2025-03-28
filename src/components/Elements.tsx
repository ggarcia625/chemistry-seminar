import { useState } from "react";
import ElementModal from "./ElementModal";
import { elementsNoActinidesOrLanthanides, Element, lanthanidesAndActinides } from "../helpers/constants";

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

  const chemicalGroupNameParser = (elementName: string) => {
    return /[A-Z]/.test(elementName) ? elementName.replace(/([A-Z]+)/g, ' $1').replace(/^ /, '') : elementName
  }

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <div className='periodic-table'>
        {elementsNoActinidesOrLanthanides.map((element) => (
          <>
          {element.name !== 'placeholder' ? 
          <button
            className={`element ${element.isShaking ? "shake" : ""}`}
            style={{
              height: "90px",
              background:
                chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
            }}
            key={element.atomicNumber}
            onClick={() => handleElementClick(element)}
          >
            {!/\d/.test(element.symbol) ? <span className="element-atomic-number">{element.atomicNumber}</span> : null}
            {!/\d/.test(element.symbol) ? <span className="element-atomic-weight">{element.atomicWeight}</span> : null}
            <span className="element-symbol" style={{ fontSize: /\d/.test(element.symbol) ? '20px' : '' }}>{element.symbol}</span>
            <span className="element-name">{element.name}</span>
            <span className="element-group-name">{chemicalGroupNameParser(element.chemicalGroup)}</span>
          </button> :
            <div></div>
          }
          </>
        ))}
      </div>
      <div className="periodic-table-lanthanidesAndActinides">
        {lanthanidesAndActinides.map((element) => (
          <button
            className={`element ${element.isShaking ? "shake" : ""}`}
            style={{
              height: "90px",
              padding: "5px",
              background:
                chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
            }}
            key={element.atomicNumber}
            onClick={() => handleElementClick(element)}
          >
            <span className="element-atomic-number">{element.atomicNumber}</span>
            <span className="element-atomic-weight">{element.atomicWeight}</span>
            <span className="element-symbol">{element.symbol}</span>
            <span
              className="element-name"
            >
              {element.name}
            </span>
            <span className="element-group-name">{chemicalGroupNameParser(element.chemicalGroup)}</span>
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
