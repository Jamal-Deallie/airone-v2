import Accordion from '@/components/Accordion';
import Image from 'next/image';
import BatchUp from '@/animations/BatchUp';
import ContainerAnimation from '@/animations/ContainerAnimation';
import styles from '@/styles/containers/Faqs.module.scss';
import cn from 'classnames';

type Props = {};

export default function Faqs({}: Props) {
  return (
    <ContainerAnimation iconUp={true}>
      <section className={cn(styles['faqs'], 'bg-tertiary pb-9 br-t')}>
        <div className='main-cont'>
          <div className='title-left pt'>
            <h1 className='title-quaternary title'>Common</h1>
            <h1 className='title-quaternary title'>Questions</h1>
            <div className={styles['stars']}>
              <div className={styles['star']}>
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
              <div className={styles['star']}>
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
          <BatchUp>
            <div className={cn(styles['accordion-cont'], 'mart-xl')}>
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </BatchUp>
        </div>
      </section>
    </ContainerAnimation>
  );
}
