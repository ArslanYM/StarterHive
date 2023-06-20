import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const useInterectionObserver = (margin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, []);

  return { isIntersecting, observerRef };
};

useInterectionObserver.propTypes = {
  isVisible: PropTypes.string,
};
