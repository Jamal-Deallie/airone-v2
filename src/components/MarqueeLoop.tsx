import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import cn from 'classnames';
import Image from 'next/image';
import gsap from 'gsap';
import styles from '@/styles/components/MarqueeLoop.module.scss';
import { horizontalLoop } from '@/helpers/horizontalLoop';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ClientList } from '@/types/typings';

type LoopProps = {
  reversed?: boolean;
  repeat?: number;
  clients: ClientList[];
};

export default function MarqueeLoop({
  clients,

  repeat = 40,
}: LoopProps) {
  return (
    <div className={styles['marquee']}>
      <ul>
        {clients.map(({ id, client }) => {
          return (
            <li className={cn(styles['loop-wrapper'], 'client')} key={id}>
              <h1>{client}</h1>
              <div className={styles['image']}>
                <Image
                  alt='star'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1676674871/air_one/circle_yk6pxm.svg'
                  }
                  fill
                  sizes='(max-width: 768px) 100vw)'
                />
              </div>
            </li>
          );
        })}
      </ul>
      <ul aria-hidden='true'>
        {clients.map(({ id, client }) => {
          return (
            <li className={cn(styles['loop-wrapper'], 'client')} key={id}>
              <h1>{client}</h1>
              <div className={styles['image']}>
                <Image
                  alt='star'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1676674871/air_one/circle_yk6pxm.svg'
                  }
                  width={30}
                  height={30}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
