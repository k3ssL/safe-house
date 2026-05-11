import { useInView } from 'react-intersection-observer';
import styles from './Hero.module.css';
import {Link} from "react-router-dom";
import hero from '../../assets/images/hero.png'

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className={styles.hero} ref={ref}>
            <div className={`${styles.hero_bg} ${inView ? styles.animated : ''}`}>
                <div className={styles.gradient_overlay}></div>
            </div>

            <div className={`container ${styles.hero_content}`}>
                <div className={`${styles.text_container} ${inView ? styles.animate_in : ''}`}>
                    <span className={styles.badge}>Полная безопасность под контролем</span>
                    <h1 className={styles.title}>
                        Ваша безопасность —
                        <span className={styles.title_accent}>  наша главная цель</span>
                    </h1>
                    <p className={styles.description}>
                        Современные системы видеонаблюдения, умные домофоны и охранные комплексы
                        для защиты вашего дома, офиса и бизнеса. Профессиональная установка и круглосуточная поддержка.
                    </p>
                    <div className={styles.buttons}>
                        <Link to={'/catalog'} className={styles.primary_btn}>
                            Выбрать оборудование
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat_item}>
                            <span className={styles.stat_number}>10k+</span>
                            <span className={styles.stat_label}>Установленных систем</span>
                        </div>
                        <div className={styles.stat_divider}></div>
                        <div className={styles.stat_item}>
                            <span className={styles.stat_number}>98%</span>
                        <span className={styles.stat_label}>Довольных клиентов</span>
                        </div>
                        <div className={styles.stat_divider}></div>
                        <div className={styles.stat_item}>
                            <span className={styles.stat_number}>24/7</span>
                            <span className={styles.stat_label}>Поддержка</span>
                        </div>
                    </div>
                </div>

                <div className={`${styles.image_container} ${inView ? styles.animate_in : ''}`}>
                    <div className={styles.image_wrapper}>
                        <div className={styles.image_glow}></div>
                        <img
                            src={hero}
                            alt="Hero"
                            className={styles.hero_image}
                        />
                        <div className={styles.floating_card} style={{ top: '10%', right: '30%' }}>
                            <div className={styles.floating_text}>Улучшенная безопасноть</div>
                        </div>
                        <div className={styles.floating_card} style={{ bottom: '15%', left: '25%' }}>
                            <div className={styles.floating_text}>Установка под "ключ"</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;