import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './UnderConstruction.module.css';

const UnderConstruction = () => {
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Анимация прогресса
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 85) {
                    clearInterval(interval);
                    return 85;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Таймер до запуска (примерная дата - через 14 дней)
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 180);
        targetDate.setHours(0, 0, 0, 0);

        const updateTimer = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    const features = [
        {
            title: 'Высокая производительность',
            description: 'Оптимизированная загрузка и быстродействие'
        },
        {
            title: 'Уникальный дизайн',
            description: 'Современный интерфейс с плавными анимациями'
        },
        {
            title: 'Безопасность',
            description: 'Защита данных и безопасные платежи'
        },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            alert(`Спасибо! Мы сообщим вам на ${email} о запуске.`);
            e.target.reset();
        }
    };

    return (
        <div className={styles.construction_page}>
            {/* Анимированный фон */}
            <div className={styles.animated_bg}>
                <div className={styles.gradient_orb}></div>
                <div className={styles.gradient_orb} style={{ animationDelay: '2s', left: '70%', top: '60%' }}></div>
                <div className={styles.grid_pattern}></div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    {/* Логотип */}
                    <div className={styles.logo}>
                        <span className={styles.logo_text}>БЕЗОПАСНЫЙ ДОМ</span>
                        <span className={styles.logo_dot}>.</span>
                    </div>

                    {/* Основной контент */}
                    <div className={styles.main_section}>
                        <div className={styles.icon_wrapper}>
                            <div className={styles.construction_icon}>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </div>
                            <div className={styles.pulse_ring}></div>
                        </div>

                        <h1 className={styles.title}>
                            Страница в
                            <span className={styles.title_accent}> разработке</span>
                        </h1>

                        <p className={styles.description}>
                            Мы усердно работаем над созданием уникального опыта для вас.
                            Скоро здесь появится что-то действительно особенное.
                        </p>

                        {/* Прогресс-бар */}
                        <div className={styles.progress_section}>
                            <div className={styles.progress_label}>
                                <span>Прогресс разработки</span>
                                <span className={styles.progress_percent}>{progress}%</span>
                            </div>
                            <div className={styles.progress_bar}>
                                <div
                                    className={styles.progress_fill}
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className={styles.progress_note}>
                                ✨ Полностью готово к {new Date().getFullYear() + 1} году
                            </p>
                        </div>

                        {/* Таймер */}
                        <div className={styles.timer_section}>
                            <h3 className={styles.timer_title}>До запуска осталось</h3>
                            <div className={styles.timer}>
                                <div className={styles.timer_item}>
                                    <span className={styles.timer_value}>{timeLeft.days}</span>
                                    <span className={styles.timer_label}>Дней</span>
                                </div>
                                <div className={styles.timer_separator}>:</div>
                                <div className={styles.timer_item}>
                                    <span className={styles.timer_value}>{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className={styles.timer_label}>Часов</span>
                                </div>
                                <div className={styles.timer_separator}>:</div>
                                <div className={styles.timer_item}>
                                    <span className={styles.timer_value}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className={styles.timer_label}>Минут</span>
                                </div>
                                <div className={styles.timer_separator}>:</div>
                                <div className={styles.timer_item}>
                                    <span className={styles.timer_value}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <span className={styles.timer_label}>Секунд</span>
                                </div>
                            </div>
                        </div>

                        {/* Форма подписки */}
                        <div className={styles.subscribe_section}>
                            <h3 className={styles.subscribe_title}>
                                Будьте в курсе новостей
                            </h3>
                            <p className={styles.subscribe_description}>
                                Подпишитесь, чтобы первыми узнать о запуске и получить специальные предложения
                            </p>
                            <form onSubmit={handleSubscribe} className={styles.subscribe_form}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ваш email"
                                    className={styles.subscribe_input}
                                    required
                                />
                                <button type="submit" className={styles.subscribe_btn}>
                                    Уведомить меня
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Особенности */}
                        <div className={styles.features}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.feature_card}>
                                    <div className={styles.feature_icon}>{feature.icon}</div>
                                    <h4 className={styles.feature_title}>{feature.title}</h4>
                                    <p className={styles.feature_description}>{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Кнопки навигации */}
                        <div className={styles.navigation}>
                            <Link to="/" className={styles.home_btn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-8H9v8H5a2 2 0 0 1-2-2z"/>
                                </svg>
                                На главную
                            </Link>
                            <Link to="/catalog" className={styles.catalog_btn}>
                                Перейти в каталог
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>

                        {/* Социальные сети */}
                        <div className={styles.social_section}>
                            <p className={styles.social_text}>Следите за новостями:</p>
                            <div className={styles.social_links}>
                                <a href="#" className={styles.social_link} aria-label="Telegram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.06-.19-.07-.06-.19-.04-.27-.02-.12.02-2.01 1.28-2.84 1.8-.27.18-.51.27-.73.27-.24 0-.7-.14-1.05-.25-.42-.14-.87-.29-1.29-.44-.56-.2-1.09-.41-1.02-.87.03-.24.36-.49.99-.74 3.01-1.31 5.02-2.18 6.02-2.6 2.86-1.18 3.46-1.39 3.85-1.39.09 0 .27.02.39.12.1.08.13.2.14.29.01.09.02.23.01.36z"/>
                                    </svg>
                                </a>
                                <a href="#" className={styles.social_link} aria-label="VK">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M21.579 6.855c.14-.465 0-.804-.662-.804h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.51-.742.673-1.02.673-.139 0-.341-.163-.341-.628V6.855c0-.558-.161-.804-.626-.804H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.87 2.136v3.228c0 .708-.128.837-.407.837-.742 0-2.545-2.723-3.615-5.839-.21-.604-.423-.84-1.004-.84H2.042c-.63 0-.757.295-.757.619 0 .58.743 3.457 3.459 7.265 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.854v-1.969c0-.63.133-.758.577-.758.327 0 .888.163 2.199 1.424 1.498 1.498 1.745 2.157 2.587 2.157h2.193c.63 0 .946-.313.764-.931-.198-.617-.917-1.511-1.869-2.573-.516-.604-1.29-1.254-1.525-1.579-.327-.42-.233-.604 0-.976 0 0 2.699-3.805 2.98-5.091z"/>
                                    </svg>
                                </a>
                                <a href="#" className={styles.social_link} aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7a5 5 0 100 10 5 5 0 000-10zm6.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;