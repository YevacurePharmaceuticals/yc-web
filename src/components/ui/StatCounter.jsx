import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  function animateCount() {
    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out curve for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <div ref={ref} className="text-center">
      <span className="block text-4xl md:text-5xl font-bold text-primary-700">
        {count}
        {suffix}
      </span>
      <span className="mt-2 block text-sm font-medium text-gray-600 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
