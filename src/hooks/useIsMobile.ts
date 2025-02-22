import { useState, useEffect, useCallback } from 'react';

/*
 * This has been taken from https://github.com/tufantunc/useIsMobile/tree/main and slightly modified to be
 * typescript compatible and to handle window being initially undefined.
 */
const useIsMobile = (mobileScreenSize = 40) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaListener = window.matchMedia(`(max-width: ${mobileScreenSize}rem)`);
    setIsMobile(mediaListener.matches);

    // try catch used to fallback for browser compatibility
    try {
      mediaListener.addEventListener('change', checkIsMobile);
    } catch {
      mediaListener.addListener(checkIsMobile);
    }

    return () => {
      try {
        mediaListener.removeEventListener('change', checkIsMobile);
      } catch {
        mediaListener.removeListener(checkIsMobile);
      }
    };
  }, [mobileScreenSize]);

  return isMobile;
};

export default useIsMobile;
