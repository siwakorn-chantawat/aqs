import React from "react";
import { FormData } from "../types/form";
import { Step2Props } from "../types/form";

const Step2: React.FC<Step2Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, companySize: event.target.value });
  };

  return (
    <div className="flex flex-col gap-2 justify-center mt-24 w-full max-w-md mx-auto bg-white border border-gray-300 rounded-md shadow-lg p-6">
      <h2 className="text-2xl font-bold">What&apos;s your company size?</h2>
      <p className=" mb-2">Please select one of the following options:</p>
      <form className="flex flex-col gap-2">
        {[
          "only me",
          "1-5 employees",
          "6-10 employees",
          "11-100 employees",
          "over 100 employees",
        ].map((companySize) => (
          <label
            key={companySize}
            className="flex items-center p-3 bg-gray-100 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <input
              type="radio"
              value={companySize}
              checked={formData.companySize === companySize}
              onChange={handleChange}
              className="form-radio mr-3"
              required
            />
            {companySize}
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
            disabled={!formData.companySize}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
