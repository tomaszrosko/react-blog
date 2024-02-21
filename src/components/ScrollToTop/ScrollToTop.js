import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.body;
    body.scrollIntoView({
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}
