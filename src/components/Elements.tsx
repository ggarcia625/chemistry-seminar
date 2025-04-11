import { useState } from "react";
import ElementModal from "./ElementModal";
import {
  elementsNoActinidesOrLanthanides,
  Element,
  lanthanidesAndActinides,
} from "../helpers/constants";
import ElementTile from "./ElementTile";
import Reactants from "./Reactants";

const Elments: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reactants, setReactants] = useState(false);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {!reactants && (
        <button onClick={() => setReactants(!reactants)}>Add Reactants</button>
      )}
      {/* {reactants && <Reactants />} */}
      <div className="periodic-table" key="upperTable">
        {elementsNoActinidesOrLanthanides.map((element) => (
          <>
            {element.name !== "placeholder" ? (
              <ElementTile
                element={element}
                handleElementClick={handleElementClick}
              />
            ) : (
              <div></div>
            )}
          </>
        ))}
      </div>
      <div className="lan-act-container" key='lowerTable'>
        <div className="lan-act-spacer"></div>
        <div className="periodic-table-lanthanidesAndActinides">
          {lanthanidesAndActinides.map((element) => (
            <ElementTile
              element={element}
              handleElementClick={handleElementClick}
            />
          ))}
        </div>
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
