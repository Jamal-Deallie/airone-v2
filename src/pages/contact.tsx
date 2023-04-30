import Form from '../components/Form';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '@/styles/pages/Contact.module.scss';
import cn from 'classnames';
type Props = {};

const DynamicMap = dynamic(() => import('@/components/RenderedMap'), {
  ssr: false,
});

export default function Contact({}: Props) {
  return (
    <section className={cn(styles['contact-cont'], 'bg-tertiary ')}>
      <div className='grid-inner padx'>
        <div className='title-center'>
          <h1 className='title-quaternary'>Let's</h1>
          <h1 className='title-quaternary'>Team Up</h1>
        </div>
      </div>

      <div className={cn(styles['items'])}>
        <div className={styles['item']}>
          <div className={styles['img']}>
            <Image
              alt='founder'
              src={'/icon/email.svg'}
              fill
              sizes='(max-width: 768px) 100vw)'
            />
          </div>
          <div>
            <h4>Email</h4>
            <p className='text'>Inquires@airone.com</p>
          </div>
        </div>
        <div className={styles['item']}>
          <div className={styles['img']}>
            <Image
              alt='founder'
              src={'/icon/call.svg'}
              fill
              sizes='(max-width: 768px) 100vw)'
            />
          </div>
          <div>
            <h4>Telephone</h4>
            <p className='txt'>214-123-4567</p>
          </div>
        </div>

        <div className={styles['item']}>
          <div className={styles['img']}>
            <Image
              alt='founder'
              src={'/icon/address.svg'}
              fill
              sizes='(max-width: 768px) 100vw)'
            />
          </div>
          <div>
            <h4>Location</h4>
            <p className='txt'>123 Main Street</p>
            <p className='txt'>Dallas, TX 75001, USA</p>
          </div>
        </div>
      </div>
      <div className={styles['map-wrap']}>
        <DynamicMap />
      </div>

      <section className='bg-primary padx grid-inner'>
        <div className={styles['title-cont']}>
          <div>
            <h1 className='desc-big'>Any</h1>
          </div>
          <div>
            <h1 className='desc-big'>Questions?</h1>
          </div>
        </div>

        <div className={styles['desc']}>
          <p className='clr-tertiary'>
            We take on select projects, working with companies who are inventing
            or reinventing. If there’s a project you’d like to talk to us about,
            please get in touch.
          </p>
        </div>
        <div className={styles['form-wrap']}>
          <Form />
        </div>
      </section>
    </section>
  );
}
