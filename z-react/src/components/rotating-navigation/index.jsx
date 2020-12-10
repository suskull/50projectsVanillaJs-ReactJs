import React, { useState } from "react";
import "./index.css";
const RotatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-700 text-gray-700">
      <div className={`bg-white py-14 px-8 origin-top-left transition duration-500 ease-linear  relative z-999 ${isOpen && "transform -rotate-20"} `}>
        <div className="fixed -top-28 -left-28 ">
          <div className={`w-52 h-52 bg-yellow-600 rounded-full relative transition duration-500 ease-linear ${isOpen && "transform -rotate-70"}`}>
            <button
              className={`h-25 bg-transparent text-white absolute top-2/3 left-1/4 text-2xl `}
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <button
              className="h-25 bg-transparent text-white absolute top-2/3 left-2/3 text-2xl"
              onClick={() => setIsOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className="content">
          <h1 className="text-center">Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor
            repellat corrupti distinctio magnam sequi optio exercitationem, quis
            fugiat. Laborum optio, blanditiis assumenda veritatis nam architecto
            modi nihil! Illo laborum dolores quod error earum. Asperiores
            recusandae ipsum quaerat vitae officiis, atque laudantium impedit,
            odio tenetur perspiciatis eaque quae quidem eius distinctio sunt
            dolorum rem id vel ea ratione! Repellendus placeat laudantium eaque
            numquam sunt obcaecati optio beatae quisquam? Quae ipsum consectetur
            assumenda reiciendis error quos quo debitis ab ad expedita? Tempore
            dolorum sunt rerum natus deserunt, rem recusandae ipsum. Tempore,
            vel? Recusandae, quis a obcaecati incidunt aspernatur assumenda nam
            dolores.
          </p>
          <h3>My dog </h3>
          <img
            src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
            alt="doggy"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo
            laudantium eligendi maxime iusto neque hic laborum voluptatum quas!
            Ullam reprehenderit laborum, nisi beatae ipsum nostrum! Nulla
            deserunt totam, exercitationem quo omnis animi iusto cum cumque
            velit accusamus aliquam illum hic repudiandae pariatur placeat
            veritatis fugit tempore unde dolor autem et molestiae minima
            cupiditate delectus. Cupiditate ullam labore nihil veniam deleniti?
            Nihil reprehenderit aut ipsam ipsum! Dolore fugit repellendus
            laborum voluptatibus deleniti ad nihil soluta.
          </p>
        </div>
      </div>
      <nav className="text-white fixed top-1/2 m-7 z-1">
        <ul>
          <li className={`mb-4  ${isOpen ?"transform duration-500 ease-in translate-x-0 delay-300" : "transform duration-500 ease-in -translate-x-full " }`}>
            <i className="fas fa-home"></i>Home
          </li>
          <li className= {`ml-6 mb-4  ${isOpen ?"transform duration-500 ease-in translate-x-0 delay-300" : "transform duration-500 ease-in -translate-150-full"}`} >
            <i className="fas fa-user-alt"></i>User
          </li>
          <li className={`ml-8 ${isOpen ? "transform duration-500 ease-in translate-x-0 delay-300" : "transform duration-500 ease-in -translate-2-full"} `}>
            <i className="fas fa-envelope"></i>Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RotatingNavigation;
