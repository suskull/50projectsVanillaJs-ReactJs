import React, { useState, useEffect } from "react";

const RandomChoicePicker = () => {
  const [choices, setChoices] = useState([]);
  const [choice, setChoice] = useState("");
  const handleChange = (e) => {
    const newArray = e.target.value
      .split(",")
      .filter((e) => e.trim() !== "")
      .map((e) => e.trim());
    setChoices(newArray);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("trigger");
      setTimeout(() => {
        e.target.value = "";
      }, 10);
      getRandomChoice();
    }
  };

  const getRandomChoice = () => {
    const times = 30
    const interval = setInterval(() => {
        const newChoice = choices[Math.floor(Math.random() * choices.length)];
        setChoice(newChoice)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
        const newChoice = choices[Math.floor(Math.random() * choices.length)];
        setChoice(newChoice)

            setTimeout(() => {
                setChoice('')
            }, 3000)
        }, 100)
    }, times * 100)
  };



  console.log(choice)
  return (
    <div className="flex flex-col min-h-screen w-full bg-blue-400 p-16">
      <p>Enter your choices divided by comma (',')</p>
      <p>press enter when you finish</p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="my-8"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>
      <div className="tags">
        {choices.map((e) => (
          <span className={` py-4 px-16 w-20 h-8 mr-4 rounded-md ${choice === e ? "bg-green-600" :"bg-yellow-600"} `}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RandomChoicePicker;
