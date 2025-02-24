import React, { useState } from "react";
import SurveyForm from "./components/SurveyForm";
import ProgressBar from "./components/ProgressBar";
import SuccessMessage from "./components/SuccessMessage";
import "./styles.css";

function App() {
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmission = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container">
      <h1>Survey Form</h1>
      <ProgressBar progress={progress} />
      <SurveyForm setProgress={setProgress} onSubmit={handleSubmission} />
      {submitted && <SuccessMessage />}
    </div>
  );
}

export default App;
