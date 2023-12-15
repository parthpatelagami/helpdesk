import { useEffect, useRef } from 'react';

export const useDebounce = (callback:any, delay:any) => {
  const timeoutRef = useRef<any>(null);
 console.log(`fdsrefewrf`);
  useEffect(() => {
    // Cleanup the previous timeout on re-render
    console.log("Use effect call");
    return () => {
        console.log("Use effect call 2");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args:any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};