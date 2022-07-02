import Head from 'next/head';

interface Props {
  title: string;
  keywords: string;
  description: string;
}

const Meta = (props: Props) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={props.keywords} />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
      </Head>
    </>
  );
};

export default Meta;
