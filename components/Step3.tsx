import React from "react";
import { FormData } from "../types/form";
import { Step3Props } from "../types/form";

const Step3: React.FC<Step3Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, hear: event.target.value });
  };

  return (
    <div className="flex flex-col gap-2 justify-center mt-24 w-full max-w-md mx-auto bg-white border border-gray-300 rounded-md shadow-lg p-6">
      <h2 className="text-2xl font-bold">How did you hear about us first?</h2>
      <p className=" mb-2">Please select one of the following options:</p>
      <form className="flex flex-col gap-2">
        {[
          "Recommendation",
          "Social Media",
          "Ads",
          "Google Search",
          "In a Podcast",
        ].map((hear) => (
          <label
            key={hear}
            className="flex items-center p-3 bg-gray-100 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <input
              type="radio"
              value={hear}
              checked={formData.hear === hear}
              onChange={handleChange}
              className="form-radio mr-3"
              required={true}
            />
            {hear}
          </label>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="self-start mt-4 px-4 py-2  text-black rounded-md  transition-colors"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="self-end mt-4 px-4 py-2 bg-gray-600 text-white disabled:bg-gray-200 rounded-md  transition-colors"
            disabled={!formData.hear}
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
