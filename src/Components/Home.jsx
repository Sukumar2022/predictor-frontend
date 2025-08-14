import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Home = () => {
    useGSAP(() => {
    let t2 = gsap.timeline();
    t2.from(".banner h1", {
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
      scale: 1,
      delay:1
    });

    t2.from(".img1", {
      duration: 1,
      x: -647,
    });
    t2.from(".img2", {
      duration: 1.2,
      y: -400,
      scale: 0.1,
    });
    t2.from(".img3", {
      duration: 1,
      y: 647,
      opacity: 1,
    });
  });
  return (
    <>
      <div className="banner">
        <h1>
          Find the best store <br /> for your product
        </h1>
        <img className="img1" src="images/img2.png" alt="" srcset="" />
        <img className="img2" src="images/img3.png" alt="" srcset="" />
        <img className="img3" src="images/img1.png" />
      </div>
    </>
  );
};

export default Home;
