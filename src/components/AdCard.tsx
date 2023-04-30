import Image from 'next/image';
import styles from '@/styles/components/AdCard.module.scss';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  image_width: string;
  image_height: string;
  brand: string;
  slug: string;
}

export default function AdCard({ title, image, brand, slug }: CardProps) {
  return (
    <div id='batch-wrap'>
      <Link href={`/advertisements/${slug}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Image
              src={image}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw'
              className={styles.img}
            />
          </div>
          <div className={styles.desc}>
            <p className={styles['brand']}>{brand}</p>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
