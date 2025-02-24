import React, { useState, useEffect } from "react";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    satisfaction: "",
  });
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const filledFields = Object.values(formData).filter(
      (val) => val !== ""
    ).length;
    setProgress((filledFields / 4) * 100);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).includes("")) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", age: "", satisfaction: "" });
    }, 5000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <div className="bg-blue-600 text-white p-3 rounded-t-lg font-semibold text-center">
        Encuesta Interactiva
      </div>
      <h2 className="text-lg font-semibold mt-4 mb-4 text-gray-700">
        Complete the Survey
      </h2>
      <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {submitted ? (
        <p className="text-green-600 text-center">
          Survey submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age *"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <div className="mb-2">
            <p className="font-semibold text-gray-700">Satisfaction Level</p>
            {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"].map(
              (level) => (
                <label
                  key={level}
                  className="block flex items-center space-x-2 text-gray-700"
                >
                  <input
                    type="radio"
                    name="satisfaction"
                    value={level}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {level}
                </label>
              )
            )}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={progress < 100}
          >
            SUBMIT SURVEY
          </button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
