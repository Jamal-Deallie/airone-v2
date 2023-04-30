import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
  content?: boolean;
  heading?: string;
};

export default function SplitLines({
  children,
  start,
  content = false,
  heading,
}: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();
    const q = gsap.utils.selector(root);

    mm.add(
      '(min-width: 800px)',
      () => {
        document.fonts.ready.then(function () {
          const splitLines = new SplitText(q('p'), { type: 'lines' });

          tl.current = gsap.timeline({
            scrollTrigger: {
              start: 'center center' || start,
              end: 'bottom bottom',
              trigger: root.current,
            },
          });

          tl.current.from(splitLines.lines, {
            opacity: 0,
            y: '50%',
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.2,
          });

          return () => {
            splitLines.revert();
          };
        });
      },
      root
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className='of-h'>
      {children}
    </div>
  );
}
