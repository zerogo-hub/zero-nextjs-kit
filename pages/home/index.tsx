
import { Input } from 'antd';
import { useTranslation } from 'next-i18next';
import Meta from '../../components/meta';
import styles from './index.module.css';

const Home = () => {

  const { t } = useTranslation('layout');


  return (
    <>
      <Meta title={t('home')} keywords="" description="" />
      <div className={styles.home}>
        <h2>Welcome zero-nextjs-kit</h2>
      </div>
      <div className='mt-8'>
        <Input placeholder='Welcome zero-nextjs-kit' />
      </div>
    </>
  );
};



export default Home;
