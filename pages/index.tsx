import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../next-i18next.config';
import Home from './home';


const Index = () => {
  return (
    <Home />
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || i18n.defaultLocale, ['common', 'layout', 'home']))
    },
    // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    // 半小时重构一次
    revalidate: 1800,
  };
};

export default Index;
