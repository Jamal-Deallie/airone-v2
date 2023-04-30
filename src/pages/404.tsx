import styles from '@/styles/pages/NotFound.module.scss';

type Props = {};

export default function NotFound({}: Props) {
  return (
    <>
      <div className='main-cont'>
        <div className={styles['not-found']}>
          <h1 className='title txt-gradient'>404</h1>
          <p>This page does not exist</p>
        </div>
      </div>
    </>
  );
}
