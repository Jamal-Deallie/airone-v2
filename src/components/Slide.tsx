import cn from 'classnames';
import Image from 'next/image';
import styles from '@/styles/components/Slide.module.scss';

type SlideProps = {
  id: number;
  src: string;
  title: string;
  desc: string;
  name: string;
};

export default function Slide({ id, src, title, desc, name }: SlideProps) {
  return (
    <div className={cn(styles['slide'], ' bg-tertiary')}>
      <div className={cn(styles['img'])}>
        <Image alt={name} src={src} fill sizes={'(max-width: 768px) 100vw'} />
      </div>
      <div className={styles['wrap']}>
        <span>{name}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
