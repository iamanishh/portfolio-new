// src/Components/scroll/SmoothScrollLayout.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScrollLayout = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.75,
      getDirection: true,
    });

    scroll.update();

    return () => {
      if (scroll) scroll.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollLayout;
