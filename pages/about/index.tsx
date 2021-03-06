import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Meta from '../../components/meta';

const About = () => {

    const { t } = useTranslation('layout');

    return (
        <>
            <Meta title={t('about')} keywords="" description="" />
            <div className='mt-8'>
                <h2>About zero-nextjs-kit</h2>
            </div>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', ['layout']))
        }
    };
};


export default About;
