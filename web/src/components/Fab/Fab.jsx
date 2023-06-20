// import React from "react";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import PropTypes from "prop-types";

export const Fab = ({ isVisible }) => {
  const { theme } = useContext(ThemeContext);

  const [isMounted, setIsMounted] = useState(false);

  const DELAY = 500;

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, DELAY);

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollUp = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  };

  const showUpAnimation = "-translate-y-4 opacity-100 ";
  const hideAnimation = "translate-y-20 opacity-0 ";

  return (
    <>
      {(isVisible || isMounted) && (
        <div
          className={`transition duration-500 fixed bottom-0 right-4 ${
            theme.fab_Background
          } p-2 rounded-md cursor-pointer ${
            isVisible ? hideAnimation : showUpAnimation
          }`}
          onClick={scrollUp}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      )}
    </>
  );
};

Fab.propTypes = {
  isVisible: PropTypes.bool,
};
