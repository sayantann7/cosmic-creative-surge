'use client';
import { useState, MouseEvent, useCallback } from 'react';
import { Button } from '@/components/ui/button';

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const CardTilt = (props:any) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className='card relative h-52 w-52 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform'
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }}
      >
        <a href={props.url} className='group relative flex h-1/4 w-full select-none items-center justify-center rounded-lg border  border-adastra-red text-sm font-light text-gray-300 transition-all duration-300 transform hover:scale-105'>
          <Button className='text-lg bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
            {props.title}
          </Button>
        </a>
      </div>
    </>
  );
};

export default CardTilt;
