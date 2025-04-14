import React from "react";
import { Reaction } from "../helpers/reactions";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: Reaction | string;
}

const ResultModal: React.FC<ModalProps> = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {typeof result === "string" ? (
          <h2>{result}</h2>
        ) : (
          <>
            <h2>
              {result.name} ({result.formula})
            </h2>
            <p>{result.description}</p>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
