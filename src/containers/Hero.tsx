import { GetStaticProps } from 'next';
import cn from 'classnames';
import Image from 'next/image';
import HeroAnimation from '@/animations/HeroAnimation';
import styles from '@/styles/containers/Hero.module.scss';

type Props = {};

export default function Hero({}: Props) {
  return (
    <HeroAnimation>
      <section className={cn(styles['hero'], 'bg-primary')}>
        <div className={styles['stars']}>
          <Image
            src={'img/stars.svg'}
            alt='stars'
            fill
            sizes='(max-width: 768px) 100vw)'
            priority
          />
        </div>
        <div className={cn(styles['title-cont'], 'mt-10 mx-auto')}>
          <div className='main-cont'>
            <div className={styles['title-wrap']}>
              <h1 className='title tertiary heading'>
                Creative Ideas out of this world
              </h1>
            </div>
            <div className={cn(styles['arrow'], 'mt-3')}>
              <Image
                className='icon'
                src={'icon/arrow-down.svg'}
                alt='arrow-down'
                fill
                sizes='(max-width: 768px) 100vw)'
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles['clouds']}>
          <div className={cn(styles['cloud'], 'cloud-left')}>
            <Image
              src={
                'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1681938278/air_one/cloud-four_xxr2nj.webp'
              }
              alt='cloud'
              fill
              sizes='(max-width: 768px) 100vw)'
              priority
            />
          </div>
          <div className={cn(styles['cloud'], 'cloud-right')}>
            <Image
              src={
                'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1681938278/air_one/cloud-zero_waixi6.webp'
              }
              alt='cloud'
              fill
              sizes='(max-width: 768px) 100vw)'
              priority
            />
          </div>
        </div>
      </section>
    </HeroAnimation>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      id: 'home',
    },
  };
};
