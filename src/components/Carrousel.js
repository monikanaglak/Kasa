import { logRoles } from "@testing-library/react";
import { useState } from "react";
export function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const how_many_pictures = pictures.length;
  const nextSlide = () => {
    setCurrent(current === how_many_pictures - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? how_many_pictures - 1 : current - 1);
  };
  if (pictures.length > 1) {
    return (
      <div className="slider_container">
        <img
          src="/images/fleshleft.svg"
          className="left_arrow"
          onClick={prevSlide}
        />
        <img
          src="/images/fleshright.svg"
          className="right_arrow"
          onClick={nextSlide}
        ></img>
        {pictures.map((picture, index) => {
          return (
            <article
              className={index === current ? "active" : "off_active"}
              key={index}
            >
              {index === current && (
                <div>
                  <img src={picture} alt="photo" className="image" />
                  <p className="counter">
                    {index + 1}/{how_many_pictures}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="slider_container">
           
                <div>
                  <img src={pictures} alt="photo" className="image" />
                </div>
              
      </div>
    );
  }
}
