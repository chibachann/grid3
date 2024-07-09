import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column01}>
                    <div className={styles.title}>address</div>
                    <div className={styles.address}>〒000-0000<br />東京都渋谷区0-0-0</div>
                </div>
                
                <div className={styles.column02}>
                    <div className={styles.title}>Site Map</div>
                    <div className={styles.menu}>
                        <a href='/'>MAHORAについて</a>
                        <a href='/'>お部屋</a>
                        <a href='/'>お食事</a>
                        <a href='/'>過ごす</a>
                        <a href='/'>よくあるご質問</a>
                        <a href='/'>アクセス</a>
                    </div>
                </div>
                <div className={styles.column03}>
                    <div className={styles.title}>Follow Us</div>
                    <div className={styles.menu}>
                        <a href='/'>Instagram</a>
                        <a href='/'>Facebook</a>
                    </div>
                </div>
                <div className={styles.list}>
                    <a href='/'>お知らせ</a>
                    <a href='/'>お問合せ</a>
                    <a href='/'>プライバシーポリシー</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

