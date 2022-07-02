import { Menu } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from './header.module.css';


const { Item } = Menu;

const HeaderLeft = () => {
    const { t } = useTranslation('layout');

    return (
        <Menu className={styles['left-menu']} mode="horizontal" theme="light" defaultSelectedKeys={['home']} >
            <Item key="home">
                <Link href="/">
                    <a><span className={styles['menu-left-text']}>{t('home')}</span></a>
                </Link>
            </Item>
        </Menu>
    );
};

export default HeaderLeft;
