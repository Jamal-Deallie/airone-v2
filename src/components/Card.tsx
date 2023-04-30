import Image from 'next/image';
import BatchFade from '@/animations/BatchFade';
import styles from '@/styles/components/Card.module.scss';
import cn from 'classnames';

type CardProps = {
  src: string;
  service: string;
  desc: string;
};

export default function Card({ service, src, desc }: CardProps) {
  return (
    <div className={cn(styles['card'], 'batch-item')}>
      <div className={styles[service]}>
        <Image alt={service} src={src} fill sizes='(max-width: 768px) 100vw)' />
      </div>
      <div className={styles.subheader}>
        <h3>{service}</h3>
      </div>
      <hr />
      <div className={styles['item-desc']}>
        <p>{desc}</p>
      </div>
    </div>
  );
}
