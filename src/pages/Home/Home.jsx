import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';
import {Link} from "react-router-dom";
import sensor from '../../assets/images/sensor.webp';
import domofon from '../../assets/images/domofon.png';
import fireSystem from '../../assets/images/fireSystem.jpg';
import smartLock from '../../assets/images/smartLock.jpg';
import glasses from '../../assets/images/glasses.jpg'
import collection from '../../assets/images/collection.jpg'
import videorecorder from "../../assets/images/videodecoder.webp";

const products = [
    {
        id: 1,
        name: 'Датчик движения Bosch',
        category: 'Датчики',
        price: 2490,
        oldPrice: 4990,
        image: sensor,
        isNew: true
    },
    {
        id: 2,
        name: 'IP-видеодомофон Hikvision',
        category: 'Домофоны',
        price: 15990,
        image: domofon,
        isNew: true
    },
    {
        id: 3,
        name: 'Пожарная сигнализация Болид',
        category: 'Пожарная безопасность',
        price: 59990,
        oldPrice: 89990,
        image: fireSystem,
        discount: 17
    },
    {
        id: 4,
        name: 'Умный замок Samsung',
        category: 'Контроль доступа',
        price: 25990,
        image: smartLock,
        isNew: true
    },
    {
        id: 5,
        name: 'Видеорегистратор 16 каналов',
        category: 'Видеонаблюдение',
        price: 42990,
        oldPrice: 89900,
        image: videorecorder,
        discount: 33
    },
];

const Home = () => {
    return (
        <main>
            <Hero />

            <section className={styles.featured}>
                <div className="container">
                    <div className={styles.section_header}>
                        <h2 className={styles.section_title}>Популярные решения</h2>
                        <p className={styles.section_subtitle}>
                            Надёжное оборудование для вашей безопасности
                        </p>
                    </div>

                    <div className={styles.products_grid}>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.banner}>
                <div className="container">
                    <div className={styles.banner_content}>
                        <div className={styles.banner_text}>
                            <span className={styles.banner_badge}>Акция месяца</span>
                            <h2 className={styles.banner_title}>Установка системы безопасности «под ключ»</h2>
                            <p className={styles.banner_description}>
                                Полный комплекс: проектирование, оборудование, монтаж и настройка.
                                Настройка удалённого доступа и обучение пользованию — в подарок.
                            </p>
                            <Link to={'/catalog'} className={styles.banner_btn}>
                                Смотреть оборудование
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.banner_image}>
                            <img src={collection} alt="Collection" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;