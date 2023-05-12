import { GetServerSideProps } from 'next';
import styles from '@/styles/containers/Ad.module.scss';
import Image from 'next/image';
import { AdData } from '../../../types/typings';
import cn from 'classnames';

type Props = {
  data: AdData[];
};

export default function Advertisements({ data }: Props) {
  const { image, title, desc, industry, image_width, image_height, brand } =
    data[0];

  return (
    <div className={cn(styles['ad'], 'bg-tertiary py-10')}>
      <div className='grid-inner'>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className='title quaternary'>{title}</h1>
          </div>

          <p className={styles.industry}>{industry}</p>
          <p> Brand: {`${brand}`}</p>
          <p>{desc}</p>
        </div>

        <div className={styles.wrap}>
          <div
            className={cn(styles.img, 'br')}
            style={{ aspectRatio: `${image_width}/${image_height}` }}>
            <Image
              src={image}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw)'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.query.slug;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&filters[slug][$eq]=${slug}`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  if (!response.data.length) {
    return { notFound: true };
  }

  return {
    props: {
      data: response.data,
    },
  };
};
