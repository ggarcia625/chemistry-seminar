import { useState } from "react";
import ElementModal from "./ElementModal";
import {
  elementsNoActinidesOrLanthanides,
  Element,
  lanthanidesAndActinides,
} from "../helpers/constants";
import ElementTile from "./ElementTile";


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
    <div>
      <div className="periodic-table">
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
      <div className="lan-act-container">
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
