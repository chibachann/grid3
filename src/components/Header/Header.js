import * as React from 'react';
import * as styles from './Header.module.css';
import Hamburger from './Hamburger';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoPlace} />
                </div>
                <div className={styles.Hamburger}>
                    <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
                <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
                    <nav className={styles.navigation}>
                        <ul>
                            <li><a href="/">ホーム</a></li>
                            <li><a href="/">研究テーマ</a></li>
                            <li><a href="/">活動紹介</a></li>
                            <li><a href="/">論文・講演等</a></li>
                            <li><a href="/">メンバー紹介</a></li>
                            <li><a href="/">トピックス</a></li>
                            <li><a href="/">お問い合わせ</a></li>
                        </ul>

                    </nav>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
