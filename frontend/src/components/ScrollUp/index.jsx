import { useEffect, useState } from "react";
import { BackToTopIcon } from "../../assets";
import { BackToTopButton } from "./styles";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollUp = () => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  return (
    <div>
      {scrollUp && (
        <BackToTopButton aria-label="Back To Top" onClick={scrollToTop}>
          <BackToTopIcon /> Scroll Up
        </BackToTopButton>
      )}
    </div>
  );
};
