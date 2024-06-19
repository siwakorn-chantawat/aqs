"use client";

import React, { useState } from "react";
// import other steps
import { FormData } from "../types/form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ThankYou from "./ThankYou";
import Welcome from "./Welcome";
import Summary from "./Summary";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    role: "",
    companySize: "",
    hear: "",
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  switch (step) {
    case 0:
      return <Welcome nextStep={nextStep} />;
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );

    default:
      return (
        <div className="mt-40 relative">
          <ThankYou />
          <Summary formData={formData} />
        </div>
      );
  }
};

export default MultiStepForm;
