import React from "react";
import { Element } from "../helpers/constants";

interface ElementTileProps {
  element: Element;
  handleElementClick: (element: Element) => void;
}

const ElementTile: React.FC<ElementTileProps> = ({
  element,
  handleElementClick,
}) => {
  const chemicalGroupBackGroundColor: { [key: string]: string } = {
    actinides:
      "linear-gradient(110deg, rgba(69, 206, 34, 0.98), rgba(68, 206, 34, 0.56))",
    alkaliMetal:
      "linear-gradient(110deg, rgba(240, 166, 7, 0.91), rgba(221, 165, 11, 0.47))",
    alkalineEarthMetal:
      "linear-gradient(110deg, rgb(255, 123, 0), rgba(233, 115, 18, 0.54))",
    halogen:
      "linear-gradient(110deg, rgb(0, 162, 255), rgba(0, 162, 255, 0.47))",
    lanthanides:
      "linear-gradient(110deg, rgb(243, 78, 12), rgba(255, 60, 0, 0.35))",
    metalloid:
      "linear-gradient(110deg, rgb(145, 141, 141), rgba(45, 141, 141, 0.32))",
    nonmetal:
      "linear-gradient(110deg, rgba(255, 0, 85, 0.99), rgba(255, 0, 85, 0.39))",
    nobleGas:
      "linear-gradient(110deg, rgb(135, 0, 255), rgba(136, 0, 255, 0.45))",
    postTransitionMetal:
      "linear-gradient(110deg, rgb(1, 0, 5), rgba(1, 0, 5, 0.49))",
    transitionMetal:
      "linear-gradient(110deg, rgb(0, 89, 255), rgba(0, 110, 255, 0.6))",
  };

  const chemicalGroupNameParser = (elementName: string) => {
    return /[A-Z]/.test(elementName)
      ? elementName
          .replace(/([A-Z]+)/g, " $1")
          .replace(/^ /, "")
          .toLowerCase()
      : elementName;
  };
  return (
    <button
      className={`element ${element.isShaking ? "shake" : ""}`}
      style={{
        background: chemicalGroupBackGroundColor[`${element.chemicalGroup}`],
      }}
      key={element.atomicNumber}
      onClick={() => handleElementClick?.(element)}
    >
      {!/\d/.test(element.symbol) ? (
        <span className="element-atomic-number">{element.atomicNumber}</span>
      ) : null}
      {!/\d/.test(element.symbol) ? (
        <span className="element-atomic-weight">{element.atomicWeight}</span>
      ) : null}
      <span
        className={`element-symbol ${
          /\d/.test(element.symbol) ? "element-symbol-lan-act" : null
        }`}
      >
        {element.symbol}
      </span>
      <span className="element-name">{element.name}</span>
      {!/\d/.test(element.symbol) ? (
        <span className="element-group-name">
          {chemicalGroupNameParser(element.chemicalGroup)}
        </span>
      ) : null}
    </button>
  );
};

export default ElementTile;
