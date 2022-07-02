import { Layout } from 'antd';
import HeaderLeft from './header-left';
import styles from './header.module.css';


const Header = () => {

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.menus}>
        <HeaderLeft />
      </div>
    </Layout.Header>
  );
};

export default Header;
