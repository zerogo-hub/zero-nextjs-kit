import { Input } from 'antd';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '../../components/meta';
import { i18n } from '../../next-i18next.config';
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || i18n.defaultLocale, ['layout']))
    }
  };
};


export default Home;
