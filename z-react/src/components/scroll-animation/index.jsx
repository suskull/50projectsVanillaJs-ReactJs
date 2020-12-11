import React, { useEffect, useState, useRef } from "react";
import "./index.css";

const boxesArray = [
  {
    id: "1",
    boxTop: 0,
  },
  {
    id: "2",
    boxTop: 0,
  },
  {
    id: "3",
    boxTop: 0,
  },
  {
    id: "4",
    boxTop: 0,
  },
  {
    id: "5",
    boxTop: 0,
  },
  {
    id: "6",
    boxTop: 0,
  },
  {
    id: "7",
    boxTop: 0,
  },
  {
    id: "8",
    boxTop: 0,
  },
  {
    id: "9",
    boxTop: 0,
  },
  {
    id: "10",
    boxTop: 0,
  },
];

const ScrollAnimation = () => {
  //   const boxArray = [...Array(20).keys()];
  const [isShow, setIsShow] = useState(false);
  const [boxTop, setBoxTop] = useState(0);
  const [searchResultTop, setSearchResultTop] = React.useState(0);
  const [boxesList, setBoxesList] = useState(boxesArray);

  const headerRef = useRef(null);

  const revealRefs = useRef([]);
//   revealRefs.current = [];
//   revealRefs.current = [];

  //   React.useLayoutEffect(() => {
  //       const tempResultTop =  searchBarReference?.current?.getBoundingClientRect()?.top
  //     setSearchResultTop(tempResultTop);
  //     setBoxesList(boxesList.map(box => ({...box, boxTop : tempResultTop })))
  //   }, [searchBarReference]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }

  };

  useEffect(() => {
    console.log(revealRefs);
  },[])



  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center overflow-x-hidden">
      {boxesList.map((x, idx) => {
        const { boxTop, id } = x;
        return (
          <div
            ref={addToRefs}
            key={id}
            className={`w-96 h-24 bg-blue-400 m-4 flex justify-center items-center box-to-select transition duration-500 ease-in `}
          >
            {id}
          </div>
        );
      })}
    </div>
  );
};
export default ScrollAnimation;
