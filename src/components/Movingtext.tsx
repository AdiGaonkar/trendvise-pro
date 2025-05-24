import React, { useEffect, useRef } from 'react';

const ScrollingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const animate = () => {
      const scrollWidth = el.scrollWidth;
      const containerWidth = el.parentElement?.clientWidth || 0;
      let current = containerWidth;

      const step = () => {
        current -= 1;
        if (current <= -scrollWidth) current = containerWidth;
        el.style.transform = `translateX(${current}px)`;
        requestAnimationFrame(step);
      };

      step();
    };

    animate();
  }, []);

  return (
    <div className="w-full bg-slate-200 overflow-hidden py-2">
      <div
        ref={textRef}
        className="whitespace-nowrap text-red-400 text-base font-medium px-4"
        style={{ willChange: 'transform' }}
      >
        Investment in the stock market is subject to market risk. We DO NOT offer any guaranteed profit or fixed return services. All trades are at your own risk. Please read all terms & disclaimers before proceeding with any advisory services by TrendvisePro.
      </div>
    </div>
  );
};

export default ScrollingText;
