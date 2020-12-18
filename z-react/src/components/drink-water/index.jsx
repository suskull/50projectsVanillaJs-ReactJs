import React from "react";

const DrinkWater = () => {
  const NUM_OF_CUPS = 8;
  const cupArrays = [...Array(NUM_OF_CUPS).keys()]
  const [isFilled, setIsFilled] = React.useState(false);
  
  const [smallCups, set]
  const handleClick = (cup) => {
      console.log(cup + 1);
      setIsFilled(!isFilled)
  }
  return (
    <div className="w-full min-h-screen bg-blue-400 flex flex-col items-center pt-12 text-white">
      <h1 className="text-4xl ">Drink Water</h1>
      <p className="text-2xl">Goal: 2 Liters</p>
      <div className="w-40 h-80 bg-white border-4 border-blue-600 rounded-b-40px my-4 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center">
          <span className="text-blue-600 text-2xl">2L</span>
          <small className="text-blue-600">Remained</small>
        </div>
        <div className="text-3xl text-blue-600 h-0 bg-blue-300">50%</div>
      </div>
      <p>Select how many glasses of water that you have drank</p>
      <div className="flex flex-wrap w-72">
        {cupArrays.map((cup) => (
          <div
            key={cup}
            onClick={() => handleClick(cup)}
            className={`w-12 h-24 border-4 border-blue-600 rounded-b-2xl mt-4 mr-4 text-blue-600 flex items-center text-center text-xl break-all ${isFilled ? "bg-blue-300" : "bg-white"} `}
          >
            250ml
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkWater;
 