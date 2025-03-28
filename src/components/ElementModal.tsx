import React from "react";

interface ModalProps {
  isOpen: Boolean;
  onClose: () => void;
  element: { symbol: string; name: string; atomicNumber: number };
}

const ElementModal: React.FC<ModalProps> = ({ isOpen, onClose, element }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          {element.name} ({element.symbol})
        </h2>
        <p>Atomic Number: {element.atomicNumber}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ElementModal;
