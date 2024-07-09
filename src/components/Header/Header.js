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
                <div className={styles.OutHamburger}>
                    <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
                <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.InHamburger}>
                        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                    </div>
                    <nav className={styles.navigation}>
                        <ul>
                            <li><a href="/">aaa</a></li>
                            <li><a href="/">aaa</a></li>
                            <li><a href="/">aaa</a></li>
                            <li><a href="/">aaa</a></li>
                            <li><a href="/">aaa</a></li>
                            
                        </ul>

                    </nav>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
