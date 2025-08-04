import React, { useState } from 'react'

const count = [1, 2, 3]

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, count.length - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="stepper">
      <div className="steps">
        {count.map((step, index) => (
          <div
            key={index}
            className={`step${index === currentStep ? ' active' : ''}`}
          >
            Step {step}
          </div>
        ))}
      </div>
      <div className="stepper-content">
        <p>Content for Step {count[currentStep]} will go here.</p>
      </div>
      <div className="stepper-controls">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === count.length - 1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Stepper
