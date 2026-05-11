import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';
import {Link} from "react-router-dom";
import whiteShirt from '../../assets/images/white_shirt.jpeg'
import sumka from '../../assets/images/sumka.webp'
import watch from '../../assets/images/watch.webp'
import asics from '../../assets/images/asics.webp'
import switer from '../../assets/images/switer.webp'
import glasses from '../../assets/images/glasses.jpg'
import collection from '../../assets/images/collection.jpg'

const products = [
    {
        id: 1,
        name: 'Минималистичная футболка',
        category: 'Одежда',
        price: 2990,
        oldPrice: 4990,
        image: whiteShirt,
        isNew: true
    },
    {
        id: 2,
        name: 'Кожаная сумка',
        category: 'Аксессуары',
        price: 12990,
        image: sumka,
        isNew: true
    },
    {
        id: 3,
        name: 'Смарт-часы',
        category: 'Электроника',
        price: 24990,
        oldPrice: 29990,
        image: watch,
        discount: 17
    },
    {
        id: 4,
        name: 'Дизайнерские кроссовки',
        category: 'Обувь',
        price: 8990,
        image: asics,
        isNew: true
    },
    {
        id: 5,
        name: 'Шерстяной свитер',
        category: 'Одежда',
        price: 5990,
        oldPrice: 8990,
        image: switer,
        discount: 33
    },
    {
        id: 6,
        name: 'Солнцезащитные очки',
        category: 'Аксессуары',
        price: 3990,
        image: glasses,
        isNew: true
    }
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