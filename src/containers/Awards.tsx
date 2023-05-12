import data from '@/data/awards.json';
import styles from '@/styles/containers/Awards..module.scss';
import cn from 'classnames';

export default function Awards() {
  return (
    <section className='py-10 quaternary-bg br-t'>
      <div className='grid-inner'>
        <div className='title-left'>
          <h1 className='title tertiary'>{"AirOne's"}</h1>
          <h1 className='title tertiary'>Awards</h1>
        </div>
        <div className={cn(styles['wrap'], 'mt-7-10')}>
          {data.map(({ id, number, ad, cat, award }) => {
            return (
              <div className={styles['award-items']} key={id}>
                <div className={cn(styles['award-items-wrap'], 'mt-3')}>
                  <div className={styles['number']} id='number'>
                    {number}
                  </div>
                  <div className={styles['award-item-name']} id='name'>
                    {ad}
                  </div>
                  <div className={styles['award-item-sub']} id='sub'>
                    {cat}
                  </div>
                  <div className={styles['award-item-icon']} id='icon'>
                    {award}
                  </div>
                </div>

                <div className={styles.line} id='line'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
