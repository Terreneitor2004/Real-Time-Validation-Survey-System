// components/ProgressBar.js
import React from "react";

function ProgressBar({ progress }) {
  return <div className="progress" style={{ width: `${progress}%` }}></div>;
}

export default ProgressBar;
