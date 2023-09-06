"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Scroller = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    });
    scroll.init();
    return () => {
      scroll.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default Scroller;
