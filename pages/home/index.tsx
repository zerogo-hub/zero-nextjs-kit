
import { useTranslation } from 'next-i18next';
import Meta from '../../components/meta';
import styles from './index.module.css';

const Home = () => {

  const { t } = useTranslation('home');


  return (
    <>
      <Meta title={t('home')} keywords="" description="" />
      <div className={styles.home}>
        <h2>Welcome zero-nextjs-kit</h2>
      </div>
    </>
  );
};



export default Home;
