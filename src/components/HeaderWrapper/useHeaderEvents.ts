import { useEffect, useState } from 'react';

export const useHeaderEvents = (
  wrapperRef: React.MutableRefObject<HTMLElement | null>,
) => {
  const [smallScreen, setSmallScreen] = useState<boolean | null>(null);
  // note: this needs to be kept in line with HeaderMenu logic for now
  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      'resize',
      () => {
        setSmallScreen(window.innerWidth < 991);
      },
      {
        signal: controller.signal,
      },
    );

    if (smallScreen === null) {
      setSmallScreen(window.innerWidth < 991);
    }

    return () => {
      controller.abort();
    };
  }, [smallScreen, setSmallScreen]);

  const handleKeyDown: React.KeyboardEventHandler = event => {
    if (event.key === 'Escape' && window) {
      window.dispatchEvent(new CustomEvent('header-disclosure-close'));
    }
  };

  const handleBlur: React.FocusEventHandler = event => {
    if (
      wrapperRef &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.relatedTarget) &&
      !smallScreen &&
      window
    ) {
      window.dispatchEvent(new CustomEvent('header-disclosure-close'));
    }
  };

  return { handleKeyDown, handleBlur };
};
