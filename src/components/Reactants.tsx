import React, { useState } from "react";
import ElementTile from "./ElementTile";
import { Element, fBlock, mainTable } from "../helpers/constants";
import { Reaction, reactions } from "../helpers/reactions";
import react from "../assets/react.svg";
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
      if (
        result.atomicNums.every((val) =>
          selectedReactants.some((item) => item.atomicNumber === val)
        )
      ) {
        mainTable.forEach((element) => {
          if (
            element.atomicNumber === 6 ||
            (element.atomicNumber === 4 && reactionKey === "s+o+u+bi")
          ) {
            element.isShaking = true;
            fBlock[20].isShaking = true;
            fBlock[18].isShaking = false;
            mainTable[33].isShaking = false;
            mainTable[51].isShaking = false;
            mainTable[104].isShaking = false;
          }
          if (
            (element.atomicNumber === 14 || element.atomicNumber === 31) &&
            reactionKey === "pu+be+c"
          ) {
            element.isShaking = true;
            mainTable[19].isShaking = false;
            mainTable[31].isShaking = false;
            fBlock[20].isShaking = false;
          }
          if (
            (element.atomicNumber === 3 ||
              element.atomicNumber === 23 ||
              element.atomicNumber === 53 ||
              element.atomicNumber === 52) &&
            reactionKey === "si+ga"
          ) {
            element.isShaking = true;
            mainTable[66].isShaking = false;
            mainTable[49].isShaking = false;
            mainTable[19].isShaking = false;
            mainTable[31].isShaking = false;
            fBlock[20].isShaking = false;
          }
        });
      }
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

  const handleCloseModal = () => {
    setSelectedReactants([]);
    setIsModalOpen(false);
  };

  return (
    <div className="modal-overlay-reactants">
      <div className="reactants-container">
        <h2 className="reactants-title">Selected Reactants</h2>
        <div className="reactants-grid">
          {selectedReactants.map((element, i) => (
            <div
              key={element.atomicNumber}
              style={{ display: "flex", alignContent: "center" }}
              className="reactant-tile-wrapper"
            >
              <ElementTile
                element={element}
                handleElementClick={() => handleRemove(element.atomicNumber)}
              />
              {selectedReactants.length > i + 1 && (
                <p
                  style={{
                    color: "rgb(0, 77, 64)",
                    fontSize: "25px",
                    textAlign: "center",
                    marginLeft: "5px",
                  }}
                >
                  +
                </p>
              )}
            </div>
          ))}
        </div>
        {selectedReactants.length > 0 && (
          <button
            onClick={handleReact}
            style={{ margin: "0.5rem", fontSize: "1.5rem" }}
          >
            React <img style={{ width: "1.5rem" }} src={react} />
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
    </div>
  );
};

export default Reactants;
