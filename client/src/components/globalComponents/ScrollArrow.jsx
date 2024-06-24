import React, { useState, useEffect, useCallback } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./ScrollArrow.module.css";

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);



  return (
    <FaArrowCircleUp
      className={styles.scrollTop}
      onClick={scrollToTop}
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};
