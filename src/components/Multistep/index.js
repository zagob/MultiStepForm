import React, { useState } from "react";

export default function MultiStep({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const numberOfSteps = children.length;

  function handleNextStep() {
    if (currentStep === numberOfSteps - 1) {
      return;
    }

    setCurrentStep(currentStep + 1);
  }

  function handlePreviousStep() {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep(currentStep - 1);
  }

  return (
    <div>
      <div>
        {children.map((step, index) => {
          return (
            <div key={`step_${index}`} hidden={currentStep !== index}>
              {step}
            </div>
          );
        })}
      </div>

      <button
        disabled={currentStep === 0}
        type="button"
        onClick={handlePreviousStep}
      >
        Previous
      </button>
      <button
        disabled={currentStep === numberOfSteps - 1}
        type="button"
        onClick={handleNextStep}
      >
        Next
      </button>
    </div>
  );
}
