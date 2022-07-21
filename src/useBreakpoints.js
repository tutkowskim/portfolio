import { useEffect, useState } from 'react';

export const BreakPoints = { SMALL: 'x', MEDIUM: 'm', LARGE: 'l' };

const calculateBreakpoint = () => {
  if (window.innerWidth < 720) return BreakPoints.SMALL;
  if (window.innerWidth < 1100) return BreakPoints.MEDIUM;
  return BreakPoints.LARGE;
};

export const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState(calculateBreakpoint());
  useEffect(() => window.addEventListener('resize', () => setBreakpoint(calculateBreakpoint())));
  return breakpoint;
};
