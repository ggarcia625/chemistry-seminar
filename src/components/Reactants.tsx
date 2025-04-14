import React, { useState } from "react";
import ElementTile from "./ElementTile";
import { Element } from "../helpers/constants";
import { Reaction, reactions } from "../helpers/reactions";
import ResultModal from "./ResultModal";

interface ReactantsProps {
  selectedReactants: Element[];
  setSelectedReactants: React.Dispatch<React.SetStateAction<Element[]>>;
}

const Reactants: React.FC<ReactantsProps> = ({
  selectedReactants,
  setSelectedReactants,
}) => {
  const [reactionResult, setReactionResult] = useState<Reaction | string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReact = () => {
    const reactionKey = selectedReactants
      .map((e) => e.symbol)
      .join("+")
      .toLocaleLowerCase();
    const result: Reaction = reactions[reactionKey];
    setIsModalOpen(true);
    if (result) {
      setReactionResult(result);
      
    } else {
      setReactionResult(`No known reaction for ${reactionKey}`);
    }
  };

  const handleRemove = (atomicNumber: number) => {
    setSelectedReactants((prev) =>
      prev.filter((e) => e.atomicNumber !== atomicNumber)
    );
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="reactants-container">
      <h2 className="reactants-title">Selected Reactants</h2>
      <div className="reactants-grid">
        {selectedReactants.map((element) => (
          <div key={element.atomicNumber} className="reactant-tile-wrapper">
            <ElementTile
              element={element}
              handleElementClick={() => handleRemove(element.atomicNumber)}
            />
          </div>
        ))}
      </div>
      {selectedReactants.length > 0 && (
        <button onClick={handleReact} className="react-btn">
          React
        </button>
      )}
      {isModalOpen && (
        <div className="reaction-result">
          <ResultModal
            isOpen={isModalOpen}
            result={reactionResult}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default Reactants;
