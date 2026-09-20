import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই রাউট (pathname) চেঞ্জ হবে, উইন্ডো স্ক্রল করে একদম উপরে চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}