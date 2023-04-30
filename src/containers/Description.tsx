import Image from 'next/image';
import SplitLines from '@/animations/SplitLines';
import FadeIn from '@/animations/FadeIn';
import cn from 'classnames';
import styles from '@/styles/containers/Description.module.scss';

type Props = {};

export default function Description({}: Props) {
  return (
    <section className={styles['description']}>
      <div className='main-cont'>
        <div className={styles['outer-container']}>
          <SplitLines>
            <div className={styles['description-wrapper']}>
              <p>
                From captivating visuals to compelling narratives, AirOne will
                help you engage your audience in a whole new dimension.
              </p>
            </div>
          </SplitLines>
          <FadeIn start={'top center'}>
            <div className={cn(styles['image'], 'fadeIn')}>
              <Image
                alt='AirOne Team'
                src={'/img/airone_team.webp'}
                fill
                sizes='(max-width: 768px) 100vw)'
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
