import { useEffect, useState, useRef } from "react";

/**
 * A custom hook that determines whether a given DOM element is currently
 * visible within the user's viewport.
 *
 * @param ref - A React ref object pointing to a DOM element.
 * @returns `true` if the element is currently visible within the viewport,
 *   `false` otherwise.
 */
export function useOnScreen(ref: React.RefObject<Element>): boolean {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Ensure ref is attached to a valid DOM node
    if (!ref.current) return;

    // Create an IntersectionObserver instance
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element's visibility changes
        setIsOnScreen(entry.isIntersecting);
      },
      {
        // Threshold is set to 1 to detect when the element is fully visible
        threshold: 1.0,
      }
    );

    // Observe the current element
    observerRef.current.observe(ref.current);

    // Cleanup observer on unmount or if ref changes
    return () => {
      if (observerRef.current && ref.current) {
        // Stop observing the element when the component is unmounted
        observerRef.current.unobserve(ref.current);
      }
      // Reset the observer reference to null
      observerRef.current = null;
    };
  }, [ref]); // Dependency array includes `ref` in case it changes

  return isOnScreen;
}

/**
 * A custom hook that calculates and returns the number of child elements
 * of a given DOM element reference.
 *
 * @param ref - A React ref object pointing to a DOM element.
 * @returns The number of child elements of the referenced DOM element.
 */
export const useChildCount = (ref: React.RefObject<Element>): number => {
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {
    // Check if the ref is attached to a current DOM element
    if (ref?.current) {
      // Update the state with the number of child elements
      setChildCount(ref.current.children.length);
    }
  }, [ref]); // Re-run effect if ref changes

  return childCount;
};

export default useChildCount;
