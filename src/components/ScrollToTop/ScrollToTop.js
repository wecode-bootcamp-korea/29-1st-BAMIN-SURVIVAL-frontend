import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { x } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [x]);

  return null;
};

export default ScrollToTop;
