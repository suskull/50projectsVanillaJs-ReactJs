import React, { useState, useEffect } from "react";

const BluryLoading = () => {
  const [loadText, setLoadText] = useState(0);
  // const int = setInterval(blurring, 30);
  // function blurring () {
  //     setLoadText(loadText + 1)
  // }
  useEffect(() => {
    const interval = setInterval(() => {
        if(loadText < 100) {
          setLoadText(loadText + 1);
        }
    }, 20);
    return () => {
        clearInterval(interval);
    };
  }, [loadText]);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  const textOpacity = scale(loadText, 0, 100, 1, 0)
  const bgBlur = scale(loadText, 0, 100, 30, 0 )
  console.log(loadText);
  return (
    <div className="min-h-screen">
      <section className=" bg-blury-pattern bg-center bg-no-repeat bg-cover relative h-screen" style={{filter: `blur(${bgBlur}px)`}}></section>
      <div className={`text-white text-5xl absolute top-46% left-48% `} style={{opacity: textOpacity}}>
        {loadText}%
      </div>
    </div>
  );
};

export default BluryLoading;
