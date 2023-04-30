import data from '@/data/awards.json';
import styles from '@/styles/containers/Awards..module.scss';
import cn from 'classnames';
type Props = {};

export default function Awards({}: Props) {
  return (
    <section className='pb-9 quaternary-bg'>
      <div className='grid-inner'>
        <div className='title-left pt'>
          <h1 className='title-tertiary'>Airone's</h1>
          <h1 className='title-tertiary'>Awards</h1>
        </div>
          <div className={cn(styles['wrap'], 'mt-md')}>
            {data.map(({ id, number, ad, cat, award }) => {
              return (
                <div className={styles['award-items']} key={id}>
                  <div className={styles['award-items-wrap']}>
                    <div className={styles.number} id='number'>
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
