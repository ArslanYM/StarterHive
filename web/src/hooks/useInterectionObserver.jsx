import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Custom hook for IntersectionObserver
export const useIntersectionObserver = (margin = "0px") => {
  // State to track whether the observed element is intersecting
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Ref to hold a reference to the observed element
  const observerRef = useRef(null);

  // Effect hook to set up the IntersectionObserver
  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isIntersecting based on the observed intersection
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin } // Apply margin options to the observer
    );

    // Start observing the referenced element
    observer.observe(observerRef.current);

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [margin]); // Re-run the effect when the margin prop changes

  // Return an object containing the isIntersecting state and observerRef
  return { isIntersecting, observerRef };
};

// Prop type validation for the useIntersectionObserver hook
useIntersectionObserver.propTypes = {
  isVisible: PropTypes.string, // Prop type validation for the isVisible prop
};
