import Image from 'next/image';
import styles from './page.module.css';
import CountButton from './CountButton';
import Button from '@pwa/react-components/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <CountButton />
        <Button>test library button</Button>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
