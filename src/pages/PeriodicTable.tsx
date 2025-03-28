import React from "react";
import ascLogo from "../assets/acs-logo.svg";
import Elments from "../components/Elements";

const PeriodicTable: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#fff", maxWidth: '1935px' }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{ marginLeft: "3rem" }}
          src={ascLogo}
          height="300"
          width="300"
        />
        <h1
          style={{
            backgroundColor: "rgb(248, 205, 49)",
            color: "rgb(0, 41, 207)",
            width: "60%",
            padding: "1rem",
          }}
        >
          PERIODIC TABLE <span style={{ fontWeight: "400" }}>OF ELEMENTS</span>
        </h1>
      </div>
      <Elments />
    </div>
  );
};

export default PeriodicTable;
