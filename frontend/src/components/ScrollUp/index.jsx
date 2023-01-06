import { useCallback, useEffect, useState } from "react";
import { BackToTopIcon } from "../../assets";
import { BackToTopButton } from "./styles";

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

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
