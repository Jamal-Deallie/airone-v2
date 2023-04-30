import MarqueeLoop from '@/components/MarqueeLoop';
import { ClientList } from '@/types/typings';
import ContainerAnimation from '@/animations/ContainerAnimation';
import client from '@/data/clients.json';
import styles from '@/styles/containers/Clients.module.scss';
import Image from 'next/image';
import cn from 'classnames';

type Props = {};

export default function Clients({}: Props) {
  const clientList: ClientList[] = client;
  return (
    <ContainerAnimation content={true}>
      <div className='pb-9 quaternary-bg'>
        <div className='title-center pt'>
          <h1 className='title-tertiary title'>Our</h1>
          <h1 className='title-tertiary title'>Friends</h1>

          <div className='star-cont center'>
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
            <div className='star center'>
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

        <div className={cn(styles['clients'], 'content')}>
          <MarqueeLoop clients={clientList.slice(1, 12)} />
          <MarqueeLoop reversed={true} clients={clientList.slice(12, 24)} />
          <MarqueeLoop clients={clientList.slice(24, 36)} />
        </div>
      </div>
    </ContainerAnimation>
  );
}
