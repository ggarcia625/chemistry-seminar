import React, { useState } from "react";
import { Reaction } from "../helpers/reactions";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: Reaction | string;
}

const ResultModal: React.FC<ModalProps> = ({ isOpen, onClose, result }) => {
  const [currPhoto, setCurrPhoto] = useState<number>(0);
  if (typeof result !== "string" && result.photos.length <= currPhoto) {
    setCurrPhoto(0);
  }
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {typeof result === "string" ? (
          <h2>{result}</h2>
        ) : (
          <>
            <h2 style={{ margin: "0px" }}>{result.formula}</h2>
            <span style={{ fontSize: "50px" }}>&#8595;</span>
            <h2 style={{ margin: "0px" }}>{result.name}</h2>
            <p>{result.description}</p>
            <div
              onClick={() => {
                setCurrPhoto(currPhoto + 1);
              }}
            >
              <img
                style={{ maxWidth: "900px", flexGrow: "0.25" }}
                src={result.photos[currPhoto]}
              />
            </div>

            {result.formula === 'Li+V+I+Te' ? <a
              href="https://lanl.jobs/search/searchjobs?categoryid=970df014-0e9c-4334-b0ae-82ec716f9566&posteddate=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>LANL Jobs</button>
            </a> :
            <button onClick={onClose}>Close</button>}
          </>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
