import React, { useState } from "react";
import "./index.css";

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
    const tempListSteps = listSteps.map((step, index) => {
      if (currentStep > index) {
        return { ...step, isActive: true };
      } else {
        return { ...step, isActive: false };
      }
    });
    setListSteps(tempListSteps);
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [listSteps, setListSteps] = useState(listStepsData);

  const width = currentStep ===  1 ? "0" : currentStep ===  4 ? "full" : ((currentStep - 1) +  "/" + (listSteps.length - 1));

  console.log(currentStep);
  console.log(listSteps.length);
  return (
    <div className="container mx-auto px-6 max-w-screen-xl p-4 flex flex-col justify-center min-h-screen">
      <div className="flex justify-between relative progress-steps-progress-container">
        <div className={`absolute h-1 top-1/2 left-0 bg-blue-400 w-${width} z-n1 transition ease-in duration-500`}></div>
        {listSteps.map((step) => {
          const { id, value, isActive } = step;
          return (
            <div
              key={id}
              className={`w-7 h-7 rounded-full border-gray-400 border-2 flex justify-center items-center text-gray-400 bg-white transition ease-in duration-500
              ${
                isActive && "border-blue-400 text-blue-400"
              } `}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className='flex justify-center mt-5'>
        <button
          className='bg-blue-400 text-white px-3 py-1.5 rounded-md mr-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none  btn-scale'
          disabled={currentStep === 1} 
          onClick={() => {
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);
            update(prevStep);
          }}
        >
          Prev
        </button>
        <button
          className='bg-blue-400 text-white px-3 py-1.5 rounded-md disabled:opacity-50 focus:outline-none btn-scale'
          disabled={currentStep === listSteps.length}
          onClick={() => {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            update(nextStep);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
