import { useState, useRef, memo } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import cn from 'classnames';
import styles from '@/styles/components/Accordion.module.scss';

type AccordionProps = {
  questions?: string;
  answers?: string;
};

const AccordionComponent = ({ questions, answers }: AccordionProps) => {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement>(null!);
  const answer = useRef<HTMLDivElement>(null!);
  const question = useRef<HTMLDivElement>(null!);
  const icon = useRef<HTMLDivElement>(null!);

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(toggle => !toggle);
  };
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ pause: true });
      tl.current
        .to(root.current, {
          duration: 0.1,
          backgroundColor: '#000',
          color: '#fff6df',
        })
        .to(
          answer.current,
          { duration: 0.25, autoAlpha: 1, height: 'auto' },
          '<-=.1'
        )
        .fromTo(
          icon.current,

          { stroke: '#000' },
          { duration: 0.2, rotate: 45, stroke: '#fff6df' },
          '-=.15'
        )

        .reverse();
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!toggle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, toggle]);

  return (
    <div className={cn(styles['faq'], 'batch-item')} ref={root}>
      <div className={styles['question']} onClick={handleToggle}>
        <span>Question?</span>
        <div ref={icon}>
          <svg viewBox='0 0 24 24'>
            <path className='iconV' d='M 12,0 V 24' />
            <path className='iconH' d='M 0,12 H 24' />
          </svg>
        </div>
      </div>
      <div className={styles['answer-wrap']} ref={answer}>
        <div className={styles['answer']}>
          <p>
            Text answering the question here. Ennervate wingardium expelliarmus
            leviosa locomotor morsmordre immobilus locomotor. Evanesco
            serpensortia engorgio wolfsbane legilimens. Aparecium inflamarae
            evanesco dissendium avada tergeo. Impedimenta jinx silencio portus.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Accordion = memo(AccordionComponent);
