import React, { useState } from "react";
import "./index.scss";

const ProgressSteps = () => {
  const listStepsData = [
    {
      id: "1",
      value: 1,
      isActive: true,
    },
    {
      id: "2",
      value: 2,
      isActive: false,
    },
    {
      id: "3",
      value: 3,
      isActive: false,
    },
    {
      id: "4",
      value: 4,
      isActive: false,
    },
  ];

  const update = (currentStep) => {
      const tempListSteps = listSteps.map((step,index) => {
            if(currentStep > index) {
                return {...step, isActive: true}
            } else {
                return {...step, isActive: false}
            }
      })
    setListSteps(tempListSteps);
  }
  const [currentStep, setCurrentStep] = useState(1);
  const [listSteps, setListSteps] = useState(listStepsData)

  const width = ((currentStep - 1) / (listSteps.length - 1)) * 100 + "%";

  console.log(currentStep);
  console.log(listSteps)
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress" style={{ width }}></div>
        {listSteps.map((step) => {
          const { id, value, isActive } = step;
          return (
            <div key={id} className={`circle ${isActive && "active"}`}>
              {value}
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button
          className="btn"
          id="prev"
          disabled={currentStep === 1}
          onClick={() => {
              const prevStep = currentStep -1
              setCurrentStep(prevStep) 
              update(prevStep)
            }}
        >
          Prev
        </button>
        <button
          className="btn"
          id="next"
          disabled={currentStep === listSteps.length}
          onClick={() => {
            const nextStep = currentStep + 1
            setCurrentStep(nextStep) 
            update(nextStep)
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
