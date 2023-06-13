"use client";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "glow",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#E5E5E5",
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);

    const smoothScrollbar = Scrollbar.init(document.body, options);

    smoothScrollbar.addListener((status) => {
      const headerElement = document.getElementById("header"); // make sure you set the id at the header
      if (headerElement) {
        if (status.offset.y > 0) {
          headerElement.style.top = smoothScrollbar.scrollTop + "px";
        } else {
          headerElement.style.top = "auto";
        }
      }
    });

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);
  return null;
};

export default Scroll;
