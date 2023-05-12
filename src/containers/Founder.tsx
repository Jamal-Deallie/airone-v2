import Image from 'next/image';
import FadeIn from '@/animations/FadeIn';
import cn from 'classnames';
import styles from '@/styles/containers/Founder.module.scss';
type Props = {};

export default function Founder({}: Props) {
  return (
    <FadeIn start={'top center'} duration={1.3}>
      <div className='grid-block bg-primary br-y fadeIn'>
        <div className={styles['image']}>
          <Image
            alt='founder'
            src={
              'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1676674859/air_one/airone_founder_dt0al1.webp'
            }
            fill
            sizes='(max-width: 768px) 100vw)'
          />
        </div>
        <aside className={cn(styles['desc-cont'], 'p-3-7')}>
          <h3 className='title quaternary'>
            {'Let’s'} get you where you should be.
          </h3>
          <div className={styles['desc']}>
            <p className='clr-secondary'>
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Amet volutpat
              consequat mauris nunc congue nisi vitae. Duis ut diam quam nulla
              porttitor massa id. Nunc scelerisque viverra mauris in aliquam sem
              fringilla. Erat pellentesque adipiscing commodo elit. Et netus et
              malesuada fames ac. Et tortor at risus viverra adipiscing at in
              tellus integer.
            </p>
          </div>
          <div className={styles['founder-info']}>
            <span>Name</span>
            <span>Founder Title</span>
          </div>
        </aside>
      </div>
    </FadeIn>
  );
}
