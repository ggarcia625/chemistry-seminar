import { useState } from "react";
import ElementModal from "./ElementModal";
import Reactants from "./Reactants";
import {
  elementsNoActinidesOrLanthanides,
  Element,
  lanthanidesAndActinides,
} from "../helpers/constants";
import ElementTile from "./ElementTile";

const Elements: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reactantMode, setReactantMode] = useState(false);
  const [reactants, setReactants] = useState<Element[]>([]);

  const handleElementClick = (element: Element) => {
    if (reactantMode) {
      const exists = reactants.some((e) => e.atomicNumber === element.atomicNumber);
      if (exists) {
        setReactants((prev) =>
          prev.filter((e) => e.atomicNumber !== element.atomicNumber)
        );
      } else {
        setReactants((prev) => [...prev, element]);
      }
    } else {
      setSelectedElement(element);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const toggleReactantMode = () => {
    setReactantMode(!reactantMode);
    setReactants([]); // optional: clear on toggle
  };

  return (
    <div>
      {reactantMode && (
        <Reactants
          selectedReactants={reactants}
          setSelectedReactants={setReactants}
        />
      )}

      <div className="periodic-table" key="upperTable">
        {elementsNoActinidesOrLanthanides.map((element) =>
          element.name !== "placeholder" ? (
            <ElementTile
              key={element.atomicNumber}
              element={element}
              handleElementClick={handleElementClick}
            />
          ) : (
            <div key={element.atomicNumber}></div>
          )
        )}
      </div>

      <div className="lan-act-container" key="lowerTable">
        <div className="lan-act-spacer"></div>
        <div className="periodic-table-lanthanidesAndActinides">
          {lanthanidesAndActinides.map((element) => (
            <ElementTile
              key={element.atomicNumber}
              element={element}
              handleElementClick={handleElementClick}
            />
          ))}
        </div>
      </div>

      {!reactantMode && selectedElement && (
        <ElementModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          element={selectedElement}
        />
      )}
       <button onClick={toggleReactantMode} style={{ marginTop: '25px' }}>
        {reactantMode ? "Exit Reactant Mode" : "Add Reactants"}
      </button>
    </div>
  );
};

export default Elements;
