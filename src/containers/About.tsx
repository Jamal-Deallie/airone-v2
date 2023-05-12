import cn from 'classnames';
import styles from '@/styles/containers/About.module.scss';

type Props = {};

export default function About({}: Props) {
  return (
    <section className='py-10 bg-tertiary'>
      <div className='grid-inner'>
        <div className={cn(styles['about-wrap'], "mb-2-3")}>
          <p className='desc-big'>
            We don’t care just about design. We care about you.
          </p>
        </div>

        <div className={cn(styles['desc-wrap'], 'mt-2')}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
            nunc sed id semper risus. Magna fermentum iaculis eu non. A iaculis
            at erat pellentesque adipiscing commodo elit. Sagittis purus sit
            amet volutpat consequat mauris nunc congue. Sit amet luctus
            venenatis lectus magna fringilla. Convallis aenean et tortor at
            risus viverra adipiscing at in. fames.
          </p>
          <p className='mt-2'>
            Ut eu sem integer vitae justo eget magna fermentum. Ut aliquam purus
            sit amet luctus venenatis. Tempor orci eu lobortis elementum nibh
            tellus molestie nunc. Sit amet justo donec enim diam vulputate ut
            pharetra. Mauris augue neque gravida in fermentum. Felis donec et
            odio pellentesque. Non arcu risus quis varius quam quisque id.
            Aenean euismod elementum nisi quis eleifend.
          </p>
        </div>
      </div>
    </section>
  );
}
