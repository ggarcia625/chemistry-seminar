import React from "react";
import { Element } from "../helpers/constants";
import ElementTile from "./ElementTile";
// symbol: "La", name: "Lanthanum", atomicNumber: 57, atomicWeight: 138.91, chemicalGroup: 'lanthanides', isShaking: false, reactants: false },
interface ModalProps {
  isOpen: Boolean;
  element: Element;
  onClose: () => void;
}
const ElementModal: React.FC<ModalProps> = ({ isOpen, onClose, element }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={{ display: "flex", justifyContent: 'space-between', width: '800px', backgroundColor: 'fff' }}>
        <ElementTile element={element}/>
        <ElementTile element={element}/>
        <ElementTile element={element}/>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ElementModal;
