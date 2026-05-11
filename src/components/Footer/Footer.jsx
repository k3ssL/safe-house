import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Instagram',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
            ),
            url: 'https://instagram.com',
            color: '#E4405F'
        },
        {
            name: 'Telegram',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.06-.19-.07-.06-.19-.04-.27-.02-.12.02-2.01 1.28-2.84 1.8-.27.18-.51.27-.73.27-.24 0-.7-.14-1.05-.25-.42-.14-.87-.29-1.29-.44-.56-.2-1.09-.41-1.02-.87.03-.24.36-.49.99-.74 3.01-1.31 5.02-2.18 6.02-2.6 2.86-1.18 3.46-1.39 3.85-1.39.09 0 .27.02.39.12.1.08.13.2.14.29.01.09.02.23.01.36z"/>
                </svg>
            ),
            url: 'https://telegram.org',
            color: '#26A5E4'
        },
        {
            name: 'VK',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.579 6.855c.14-.465 0-.804-.662-.804h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.51-.742.673-1.02.673-.139 0-.341-.163-.341-.628V6.855c0-.558-.161-.804-.626-.804H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.87 2.136v3.228c0 .708-.128.837-.407.837-.742 0-2.545-2.723-3.615-5.839-.21-.604-.423-.84-1.004-.84H2.042c-.63 0-.757.295-.757.619 0 .58.743 3.457 3.459 7.265 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.854v-1.969c0-.63.133-.758.577-.758.327 0 .888.163 2.199 1.424 1.498 1.498 1.745 2.157 2.587 2.157h2.193c.63 0 .946-.313.764-.931-.198-.617-.917-1.511-1.869-2.573-.516-.604-1.29-1.254-1.525-1.579-.327-.42-.233-.604 0-.976 0 0 2.699-3.805 2.98-5.091z"/>
                </svg>
            ),
            url: 'https://vk.com',
            color: '#0077FF'
        },
        {
            name: 'YouTube',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            ),
            url: 'https://youtube.com',
            color: '#FF0000'
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.514 1.091 3.543l-1.044 3.551 3.672-.956c1.018.572 2.164.877 3.342.877 3.18 0 5.766-2.586 5.767-5.766.001-3.18-2.585-5.767-5.766-5.767zm2.919 7.813c-.162.457-.954.874-1.306.922-.352.048-.619.131-1.112-.078-.492-.209-1.118-.536-1.912-1.086-.92-.638-1.527-1.427-1.663-1.672-.136-.245-.242-.527-.119-.77.118-.242.242-.485.399-.679.157-.194.242-.315.363-.534.121-.219.061-.41-.03-.574-.091-.164-.812-1.956-1.112-2.678-.293-.708-.594-.61-.812-.621-.202-.011-.434-.011-.666-.011-.232 0-.609.087-.929.436-.319.349-1.221 1.193-1.221 2.907 0 1.714 1.247 3.37 1.422 3.602.174.232 2.465 3.747 5.973 5.219 3.508 1.472 3.508.981 4.139.92.631-.061 2.034-.831 2.321-1.634.287-.803.287-1.492.201-1.635-.086-.143-.318-.232-.666-.407-.348-.174-2.035-1.003-2.35-1.118-.315-.115-.545-.174-.774.087-.229.261-.889 1.045-1.089 1.259-.201.215-.401.242-.749.073-.348-.174-1.47-.543-2.8-1.727-1.035-.923-1.734-2.063-1.937-2.412-.203-.349-.022-.537.152-.711.157-.157.348-.406.522-.609.174-.203.232-.348.348-.581.116-.232.058-.435-.029-.609-.087-.174-.774-1.867-1.062-2.557-.279-.669-.562-.58-.774-.59-.203-.01-.435-.01-.668-.01z"/>
                </svg>
            ),
            url: 'https://whatsapp.com',
            color: '#25D366'
        }
    ];

    const quickLinks = [
        { name: 'Главная', url: '/' },
        { name: 'Каталог', url: '/catalog' },
        { name: 'О нас', url: '/about' },
    ];

    const helpLinks = [
        { name: 'Доставка и оплата', url: '/delivery' },
        { name: 'Возврат товара', url: '/returns' },
        { name: 'Часто задаваемые вопросы', url: '/faq' },
        { name: 'Политика конфиденциальности', url: '/privacy' },
        { name: 'Пользовательское соглашение', url: '/terms' }
    ];

    const contacts = [
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
            ),
            value: '+7 (800) 555-35-35',
            link: 'tel:+78005553535'
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            ),
            value: 'hello@bastion-store.ru',
            link: 'mailto:hello@bastion-store.ru'
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
            ),
            value: 'г. Стерлитамак, ул. Бабушкина, д. 100,',
            link: 'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%B0%D0%B1%D1%83%D1%88%D0%BA%D0%B8%D0%BD%D0%B0,+100,+%D0%A1%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD,+453105/@53.6823631,55.998157,849m/data=!3m1!1e3!4m6!3m5!1s0x43d8114328d87061:0x7c9cd3522cc1126b!8m2!3d53.6716272!4d55.9959227!16s%2Fg%2F11c5pv7jr5?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D'
        }
    ];

    const handleSocialClick = (url, name) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_content}>
                    {/* Логотип и описание */}
                    <div className={styles.footer_section}>
                        <Link to="/" className={styles.footer_logo}>
                            <span className={styles.logo_text}>БАСТИОН</span>
                            <span className={styles.logo_dot}>.</span>
                        </Link>
                        <p className={styles.footer_description}>
                            Профессиональные системы безопасности для дома и бизнеса. Надёжное оборудование, умные технологии и круглосуточная защита того, что вам дорого.
                        </p>
                        <div className={styles.social_links}>
                            {socialLinks.map((social, index) => (
                                <button
                                    key={index}
                                    className={styles.social_link}
                                    onClick={() => handleSocialClick(social.url, social.name)}
                                    aria-label={social.name}
                                    style={{ '--social-color': social.color }}
                                >
                                    {social.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Быстрые ссылки */}
                    <div className={styles.footer_section}>
                        <h3 className={styles.footer_title}>Каталог</h3>
                        <ul className={styles.footer_links}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.url} className={styles.footer_link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Помощь */}
                    <div className={styles.footer_section}>
                        <h3 className={styles.footer_title}>Помощь</h3>
                        <ul className={styles.footer_links}>
                            {helpLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.url} className={styles.footer_link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div className={styles.footer_section}>
                        <h3 className={styles.footer_title}>Контакты</h3>
                        <ul className={styles.contact_list}>
                            {contacts.map((contact, index) => (
                                <li key={index}>
                                    <a
                                        href={contact.link}
                                        className={styles.contact_link}
                                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <span className={styles.contact_icon}>{contact.icon}</span>
                                        <span>{contact.value}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.work_hours}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>Ежедневно: 09:00 - 21:00</span>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className={styles.footer_bottom}>
                    <div className={styles.copyright}>
                        <p>© {currentYear} БАСТИОН. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;