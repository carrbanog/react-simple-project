import { useState } from "react";
import {FaStar} from "react-icons/fa"
import "./style.css"

function StarRating({noOfStars}){
  
  const [hover, setHover] = useState(0);

  function handleMouseMove(getCurrentIndex){
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(){
    setHover(0);
  }
  return(
    <div>
      {
        [...Array(noOfStars)].map((e, index) => {
          return(
            <FaStar
              key={index}
              className={index <= hover ? "active" : index}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          )
        })
      }
    </div>
  )
}


export default StarRating;