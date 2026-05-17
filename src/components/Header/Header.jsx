import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useCartStore from '../../store/cartStore';
import useChatStore from '../../store/chatStore';
import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated, logout } = useAuthStore();
    const { getTotalItems } = useCartStore();
    const { toggleChat } = useChatStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const totalItems = getTotalItems();

    const handleLogout = () => {
        logout();
        navigate('/login');
        setIsMobileMenuOpen(false);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Блокируем прокрутку при открытом меню
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header_content}>
                        <Link to="/" className={styles.logo} onClick={handleLinkClick}>
                            <span className={styles.logo_text}>БЕЗОПАСНЫЙ ДОМ</span>
                            <span className={styles.logo_dot}>.</span>
                        </Link>

                        {/* Десктоп навигация */}
                        <nav className={styles.nav}>
                            <Link
                                to="/"
                                className={`${styles.nav_link} ${location.pathname === '/' ? styles.active : ''}`}
                            >
                                Главная
                            </Link>
                            <Link
                                to="/catalog"
                                className={`${styles.nav_link} ${location.pathname === '/catalog' ? styles.active : ''}`}
                            >
                                Каталог
                            </Link>
                            <Link
                                to="/about"
                                className={`${styles.nav_link} ${location.pathname === '/about' ? styles.active : ''}`}
                            >
                                О нас
                            </Link>
                        </nav>

                        <div className={styles.actions}>
                            {isAuthenticated ? (
                                <>
                                    <button className={styles.chat_btn} onClick={toggleChat}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                    </button>
                                    <Link to="/cart" className={styles.cart_btn}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="9" cy="21" r="1"/>
                                            <circle cx="20" cy="21" r="1"/>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                        </svg>
                                        {totalItems > 0 && <span className={styles.cart_badge}>{totalItems}</span>}
                                    </Link>
                                    <Link to="/profile" className={styles.profile_btn}>
                                        <img src={user?.avatar} alt={user?.name} className={styles.avatar} />
                                    </Link>
                                    <button onClick={handleLogout} className={styles.logout_btn}>
                                        Выйти
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className={styles.login_btn}>Войти</Link>
                                    <Link to="/register" className={styles.register_btn}>Регистрация</Link>
                                </>
                            )}

                            {/* Бургер-меню кнопка (только на мобильных) */}
                            <button
                                className={`${styles.burger_btn} ${isMobileMenuOpen ? styles.burger_active : ''}`}
                                onClick={toggleMobileMenu}
                                aria-label="Меню"
                            >
                                <span className={styles.burger_line}></span>
                                <span className={styles.burger_line}></span>
                                <span className={styles.burger_line}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Мобильное меню (оверлей) */}
            <div className={`${styles.mobile_menu_overlay} ${isMobileMenuOpen ? styles.mobile_menu_open : ''}`} onClick={closeMobileMenu}>
                <div className={styles.mobile_menu} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.mobile_menu_header}>
                        <div className={styles.mobile_menu_logo}>
                            <span>БЕЗОПАСНЫЙ ДОМ</span>
                            <span className={styles.mobile_menu_dot}>.</span>
                        </div>
                        <button className={styles.mobile_menu_close} onClick={closeMobileMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <nav className={styles.mobile_nav}>
                        <Link
                            to="/"
                            className={`${styles.mobile_nav_link} ${location.pathname === '/' ? styles.active : ''}`}
                            onClick={handleLinkClick}
                        >
                            <span>Главная</span>
                        </Link>
                        <Link
                            to="/catalog"
                            className={`${styles.mobile_nav_link} ${location.pathname === '/catalog' ? styles.active : ''}`}
                            onClick={handleLinkClick}
                        >
                            <span>Каталог</span>
                        </Link>
                        <Link
                            to="/about"
                            className={`${styles.mobile_nav_link} ${location.pathname === '/about' ? styles.active : ''}`}
                            onClick={handleLinkClick}
                        >
                            <span>О нас</span>
                        </Link>
                    </nav>

                    {isAuthenticated ? (
                        <div className={styles.mobile_user_section}>
                            <div className={styles.mobile_user_info}>
                                <img src={user?.avatar} alt={user?.name} className={styles.mobile_avatar} />
                                <div>
                                    <div className={styles.mobile_user_name}>{user?.name}</div>
                                    <div className={styles.mobile_user_email}>{user?.email}</div>
                                </div>
                            </div>

                            <div className={styles.mobile_actions}>
                                <Link to="/cart" className={styles.mobile_action_btn} onClick={handleLinkClick}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="9" cy="21" r="1"/>
                                        <circle cx="20" cy="21" r="1"/>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                    </svg>
                                    <span>Корзина</span>
                                    {totalItems > 0 && <span className={styles.mobile_badge}>{totalItems}</span>}
                                </Link>
                                <Link to="/profile" className={styles.mobile_action_btn} onClick={handleLinkClick}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <span>Профиль</span>
                                </Link>
                                <button className={styles.mobile_action_btn} onClick={toggleChat}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                    <span>Чат</span>
                                </button>
                                <button className={styles.mobile_logout_btn} onClick={handleLogout}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                        <polygon points="16 17 21 12 16 7"/>
                                        <line x1="9" y1="12" x2="21" y2="12"/>
                                    </svg>
                                    <span>Выйти</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.mobile_auth_section}>
                            <Link to="/login" className={styles.mobile_login_btn} onClick={handleLinkClick}>
                                Войти
                            </Link>
                            <Link to="/register" className={styles.mobile_register_btn} onClick={handleLinkClick}>
                                Регистрация
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;