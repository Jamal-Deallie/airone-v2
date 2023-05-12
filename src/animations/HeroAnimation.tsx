import { ReactNode, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

type AnimationProps = {
  children?: ReactNode;
};

export default function HeroAnimation({ children }: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useEffect(() => {
    const mm = gsap.matchMedia(root);
    mm.add('(min-width: 800px)', context => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: 'top center',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      let splitLines = new SplitText('h1', { type: 'lines' });

      gsap.set('.cloud-left', { yPercent: -70, scale: 1.5 });
      gsap.set('.cloud-right', { yPercent: -70, scale: 1.5 });

      tl.current
        .to('.cloud-left', {
          delay: 1,
          yPercent: 0,
          scale: 1,
          ease: 'circ.out',
          duration: 0.75,
          // overwrite: 'auto',
        })
        .to(
          '.cloud-right',
          {
            yPercent: 0,
            scale: 1,
            ease: 'circ.out',
            duration: 0.75,
            //   overwrite: 'auto',
          },
          '<'
        )
        .from(splitLines.lines, {
          opacity: 0,
          y: '50%',
          duration: 1.5,
          ease: 'power4.out',
          stagger: 0.2,
        })
        .from(
          '.icon',
          {
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
          },
          '-=1'
        );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
