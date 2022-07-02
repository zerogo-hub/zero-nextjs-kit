import { BackTop, Layout } from 'antd';
import React from 'react';
import Footer from './footer';
import Header from './header';
import styles from './index.module.css';



const { Content } = Layout;
interface Props {
  children: React.ReactNode;
}

const MyLayout = (props: Props) => (
  <Layout className={styles.layout}>
    <Header />
    <Content className={styles.content}>
      <div className={styles['container-content']}>
        {props.children}
      </div>
    </Content>
    <Footer />
    <BackTop />
  </Layout>
);

export default MyLayout;
