import ContainerAnimation from '@/animations/ContainerAnimation';
import Image from 'next/image';
import Card from '@/components/Card';
import BatchUp from '@/animations/BatchUp';
import styles from '@/styles/containers/Service.module.scss';
import services from '@/data/services.json';
import cn from 'classnames';

type Props = {};

export default function Services({}: Props) {
  return (
    <ContainerAnimation iconUp={true}>
      <div className={cn(styles['service'], 'pb-9')}>
        <div className='grid-inner'>
          <div className='title-left pt'>
            <h1 className='title-quaternary title'>Our</h1>
            <h1 className='title-quaternary title'>Services</h1>
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
        <BatchUp>
          <div className={styles['services-wrap']}>
            <div className={cn(styles['grid-cont'], 'cont-inner')}>
              {services.map(({ id, ...card }) => {
                return <Card {...card} key={id} />;
              })}
            </div>
          </div>
        </BatchUp>
      </div>
    </ContainerAnimation>
  );
}
