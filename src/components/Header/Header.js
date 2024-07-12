import * as React from 'react';
import * as styles from './Header.module.css';
import Hamburger from './Hamburger';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { text: "三気堂について", href: "/" },
        { text: "三気堂の取り組み", href: "/" },
        { text: "店舗情報", href: "/" },
        { text: "採⽤情報", href: "/" },
        { text: "お知らせ", href: "/" },
        { text: "コラム", href: "/" },
        { text: "お問い合わせ", href: "/" }
    ];

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
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.listMenu}>
                    <ul>
                    {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.text}</a>
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
