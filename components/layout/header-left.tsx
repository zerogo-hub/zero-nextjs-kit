import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from './header.module.css';

const HeaderLeft = () => {
    const { t } = useTranslation('layout');

    const items: MenuProps['items'] = [
        {
            key: 'home',
            label: (
                <Link href="/">
                    <a><span className={styles['menu-left-text']}>{t('home')}</span></a>
                </Link>
            ),
        },
        {
            key: 'about',
            label: (
                <Link href="/about">
                    <a><span className={styles['menu-left-text']}>{t('about')}</span></a>
                </Link>
            ),
        }
    ];

    return (
        <Menu
            className={styles['left-menu']}
            mode="horizontal"
            theme="light"
            items={items}
        />
    );
};


export default HeaderLeft;
