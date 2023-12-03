import styles from './page.module.css';
import CountButton from './CountButton';
import Button from '@pwa/react-components/Button';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <CountButton />
        <Button>test library button</Button>
      </div>
    </main>
  );
};

export default Home;
