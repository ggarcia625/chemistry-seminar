import React, { useState } from "react";
import { Element } from "../helpers/constants";

interface ReactantsProps {
  ElementTile: React.FC<{
    element: Element;
    handleElementClick: (element: Element) => void;
  }>;
}

const Reactants: React.FC<ReactantsProps> = ({ ElementTile }) => {
  const [reactants, setReactants] = useState<Element[]>([]);

  const handleElementClick = (element: Element) => {
    const alreadySelected = reactants.find(
      (e) => e.atomicNumber === element.atomicNumber
    );

    if (alreadySelected) {
      setReactants((prev) =>
        prev.filter((e) => e.atomicNumber !== element.atomicNumber)
      );
    } else {
      setReactants((prev) => [...prev, element]);
    }
  };

  const handleReact = () => {
    if (reactants.length === 0) {
      alert("No reactants selected!");
    } else {
      const formula = reactants.map((e) => e.symbol).join(" + ");
      alert(`Reacting: ${formula}`);
      // You can replace this with a modal or animation or state update
    }
  };

  return (
    <div className="reactants-container">
      <h2 className="text-xl font-bold mb-2">Reactants</h2>
      <div className="flex gap-2 flex-wrap">
        {reactants.map((element) => (
          <ElementTile
            key={element.atomicNumber}
            element={element}
            handleElementClick={handleElementClick}
          />
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={handleReact}
      >
        React
      </button>
    </div>
  );
};

export default Reactants;
