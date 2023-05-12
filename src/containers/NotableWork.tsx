import Image from 'next/image';
import ContainerAnimation from '@/animations/ContainerAnimation';
import FadeIn from '@/animations/FadeIn';
import cn from 'classnames';
import styles from '@/styles/containers/NotableWork.module.scss';

type Props = {};

export default function NotableWork({}: Props) {
  return (
    <div className={cn('bg-quaternary br-b py-10', styles['work'])}>
      <ContainerAnimation iconUp={true}>
        <div className='grid-inner'>
          <div className='title-right'>
            <h1 className='title tertiary'>Notable</h1>
            <h1 className='title tertiary'>Work</h1>

            <div className={cn('star-cont mt', styles['stars'])}>
              <div className='star'>
                <Image
                  className='icon'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1676674882/air_one/diamond_3_buabj2.svg'
                  }
                  alt={'star'}
                  fill
                  sizes='(max-width: 768px) 100vw)'
                />
              </div>
              <div className='star'>
                <Image
                  className='icon'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1676674882/air_one/diamond_3_buabj2.svg'
                  }
                  alt={'star'}
                  fill
                  sizes='(max-width: 768px) 100vw)'
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerAnimation>
      <FadeIn start={'top center'}>
        <div className={cn(styles['ads-top'], 'grid-inner mt-10 fadeIn')}>
          <div className={styles['ad']}>
            <h3 className='title tertiary'>01</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={cn(styles['img'], 'br my-2-3')}>
              <Image
                alt='brand-identity'
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602975/air_one/tropulis_bxiph8.webp'
                }
                fill
                sizes='(max-width: 768px) 100vw)'
              />
            </div>
          </div>
          <div className={styles['ad']}>
            <h3 className='title tertiary'>02</h3>
            <div className={cn(styles['img'], 'br my-2-3')}>
              <Image
                alt='brand-identity'
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602974/air_one/disney_rj5gtn.webp'
                }
                fill
                sizes='(max-width: 768px) 100vw)'
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn start={'top center'}>
        <div className={cn(styles['ads-bot'], 'grid-inner fadeIn')}>
          <div className={styles['ad']}>
            <h3 className='title tertiary'>03</h3>
            <div className={cn(styles['img'], 'br my-2-3')}>
              <Image
                alt='brand-identity'
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667613926/air_one/mcdonalds_nupbsf.webp'
                }
                fill
                sizes='(max-width: 768px) 100vw)'
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles['ad']}>
            <h3 className='title tertiary'>04</h3>
            <div className={cn(styles['img'], 'br my-2-3')}>
              <Image
                alt='brand-identity'
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602981/air_one/marmite_vcgcni.webp'
                }
                fill
                sizes='(max-width: 768px) 100vw)'
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
