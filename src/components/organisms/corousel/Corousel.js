import React, { useState, useEffect } from "react";
import Image from "../../atoms/image/Image";
import CorouselInfo from "../../molecules/corouselInfo/CorouselInfo";
import "./style.css";

function Corousel(props) {
  const { corouselData } = props;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nextIndex = (active + 1) % corouselData.length;
    const interval = setTimeout(() => setActive(nextIndex), 5000);
    return () => clearTimeout(interval);
  }, [active]);

  const Prev = (e) => {
    e.preventDefault();
    if (active === 0) setActive(corouselData.length - 1);
    else setActive(active - 1);
  };

  const Next = (event) => {
    event.preventDefault();
    if (active === corouselData.length - 1) setActive(0);
    else setActive(active + 1);
  };

  return (
    <div>
      {corouselData.map((item, index) => {
        return (
          index === active && (
            <div className="corousel-container" key={index}>
              <div onClick={(e) => Prev(e)}>
                <Image
                  source="previous.png"
                  width="40"
                  height="40"
                  imgBorder="img-prev"
                ></Image>
              </div>
              <div className="corouselImgInfo">
                <CorouselInfo
                  textContentHeader={item.textContentHeader}
                  textContentSubHeader={item.textContentSubHeader}
                  tag1={item.tag1}
                  tag2={item.tag2}
                ></CorouselInfo>
              </div>

              <Image
                source={item.image}
                width="100%"
                height="90%"
                imgBorder="corousel-Img"
              ></Image>
              <div onClick={(e) => Next(e)}>
                <Image
                  source="next.png"
                  width="40"
                  height="40"
                  imgBorder="img-prev"
                ></Image>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default Corousel;
