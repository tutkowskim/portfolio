import { useEffect } from 'react';

function useOutsideAlerter(refs, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedRefs = refs.filter((ref) => ref.current && ref.current.contains(event.target));
      if (clickedRefs.length <= 0) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, refs);
}

export default useOutsideAlerter;
