import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Menu from '@/components/Menu';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  const Logo = dynamic(() => import('@/svgs/a-logo.svg'), { ssr: false });

  return (
    <nav className={styles.nav}>
      <div className={styles['inner']}>
        <Link href='/' className={styles.logo}>
          <div className={styles.wrap}>
            <Image
              src={'/icon/a-logo.svg'}
              alt='logo'
              fill
              sizes='(max-width: 768px) 100vw)'
              priority
            />
          </div>
        </Link>
        <Menu />
      </div>
    </nav>
  );
}
