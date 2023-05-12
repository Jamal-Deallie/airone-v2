import { useBlazeSlider } from 'react-blaze-slider';
import dynamic from 'next/dynamic';
import Slide from '@/components/Slide';
import teamItems from '@/data/team.json';
import styles from '@/styles/components/Slider.module.scss';

const Arrow = dynamic(() => import('@/svgs/arrow-slide.svg'), { ssr: false });

type Props = {};

export default function Slider({}: Props) {
  const ref = useBlazeSlider({
    all: {
      slidesToShow: 4,
      slidesToScroll: 1,
      transitionTimingFunction: 'linear',
      transitionDuration: 800,

    },
    '(max-width: 800px)': {
      slidesToShow: 1,
      slidesToScroll: 1,
      transitionDuration: 500,
      transitionTimingFunction: 'ease',
    },
  });

  return (
    <div className='main-cont'>
      <div className='blaze-slider' ref={ref}>
        <div className='controls main-cont'>
          <button className='blaze-prev'>
            <div className={styles['arr-l']}>
              <Arrow />
            </div>
          </button>
       
          <button className='blaze-next'>
            <div className={styles['arr-r']}>
              <Arrow />
            </div>
          </button>
        </div>
        <div className='blaze-container mt-2-3'>
          <div className='blaze-track-container'>
            <div className='blaze-track'>
              {teamItems.map(item => {
                return <Slide {...item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
