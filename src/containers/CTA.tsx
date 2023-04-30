import { useState, SyntheticEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContainerAnimation from '@/animations/ContainerAnimation';
import cn from 'classnames';
import styles from '@/styles/containers/CTA.module.scss';
type Props = {};

export default function CTA({}: Props) {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };

  return (
    <ContainerAnimation content={true}>
      <section className='br-t pb-9'>
        <div className='main-cont'>
          <div className='grid-inner'>
            <div className='title-center pt'>
              <h1 className='title-tertiary title'>Heard</h1>
              <h1 className='title-tertiary title'>Enough?</h1>

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
            <div className={cn(styles.btn, 'mt-m content')}>
              <Link href='contact'>Start A Project</Link>
            </div>
          </div>
        </div>
      </section>
    </ContainerAnimation>
  );
}
