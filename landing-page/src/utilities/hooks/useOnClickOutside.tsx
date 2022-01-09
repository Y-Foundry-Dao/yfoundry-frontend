import { useLayoutEffect } from 'react';

const useOnClickOutside = (ref:any, handler:any) => {
  useLayoutEffect(() => {
    const listener = (event:MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export default useOnClickOutside