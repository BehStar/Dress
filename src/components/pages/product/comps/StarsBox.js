import React from "react";
import { useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const StarsBox = () => {
  const [stars, setStars] = useState([false, false, false, false, false]);
  const handleClickStars = (ind) => {
    const newStars = stars.map((eachStar, index) => {
      if (ind < index) {
        return false;
      }
      {
        return true;
      }
    });
    setStars(newStars);
  };
  return (
    <ul className="stars-box">
      {stars.map((star, ind) => {
        return (
          <li key={ind} onClick={() => handleClickStars(ind)}>
            {star ? <AiTwotoneStar /> : <AiOutlineStar />}
          </li>
        );
      })}
    </ul>
  );
};

export default StarsBox;
