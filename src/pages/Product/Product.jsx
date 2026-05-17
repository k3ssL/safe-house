import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import styles from './Product.module.css';
import whiteShirt from '../../assets/images/white_shirt.jpeg'
import whiteShirt2 from '../../assets/images/whiteShirt2.webp'
import whiteShirt3 from '../../assets/images/whiteShirt3.webp'
import sumka from '../../assets/images/sumka.webp'
import sumka2 from '../../assets/images/sumka2.jpeg'
import sumka3 from '../../assets/images/sumka3.jpeg'
import watch from '../../assets/images/watch.webp'
import watch2 from '../../assets/images/watch2.webp'
import watch3 from '../../assets/images/watch3.webp'
import asics from '../../assets/images/asics.webp'
import asics2 from '../../assets/images/asics2.webp'
import asics3 from '../../assets/images/asics3.jpg'
import switer from '../../assets/images/switer.webp'
import switer2 from '../../assets/images/switer2.webp'
import switer3 from '../../assets/images/switer3.webp'
import jeans from '../../assets/images/jeans.webp'
import jeans2 from '../../assets/images/jeans2.webp'
import jeans3 from '../../assets/images/jeans3.webp'
import airpods from '../../assets/images/airpods.webp'
import airpods2 from '../../assets/images/airpods2.webp'
import airpods3 from '../../assets/images/airpods3.jpeg'
import remen from '../../assets/images/remen.webp'
import remen2 from '../../assets/images/remen2.webp'
import remen3 from '../../assets/images/remen3.webp'
import palto from '../../assets/images/palto.webp'
import palto2 from '../../assets/images/palto2.webp'
import palto3 from '../../assets/images/palto3.webp'
import glasses2 from '../../assets/images/glasses2.webp'
import glasses3 from '../../assets/images/glasses3.webp'
import bag from '../../assets/images/bag.jpg'
import bag2 from '../../assets/images/bag2.webp'
import bag3 from '../../assets/images/bag3.webp'
import glasses from '../../assets/images/glasses.jpg'
import plate from '../../assets/images/plate.jpg'
import plate2 from '../../assets/images/plate2.webp'
import plate3 from '../../assets/images/plate3.webp'
import useAuthStore from "../../store/authStore";

const productData = {
    1: {
        id: 1,
        name: 'Минималистичная футболка',
        category: 'Одежда',
        subcategory: 'Футболки',
        price: 2990,
        oldPrice: 4990,
        rating: 4.8,
        reviews: 124,
        image: whiteShirt,
        images: [
            whiteShirt,
            whiteShirt2,
            whiteShirt3
        ],
        description: 'Классическая футболка из 100% хлопка премиум-класса. Мягкая, дышащая ткань обеспечивает максимальный комфорт в течение всего дня. Минималистичный дизайн и идеальная посадка делают эту футболку универсальным выбором для любого гардероба.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Черный', 'Белый', 'Серый'],
        inStock: true,
        isNew: true
    },
    2: {
        id: 2,
        name: 'Кожаная сумка',
        category: 'Аксессуары',
        subcategory: 'Сумки',
        price: 12990,
        rating: 4.9,
        reviews: 87,
        image: sumka,
        images: [
            sumka,
            sumka2,
            sumka3
        ],
        description: 'Элегантная сумка из натуральной кожи. Просторное отделение, регулируемый ремень и стильный дизайн. Идеально подходит как для повседневного использования, так и для особых случаев. Внутри есть карман для мелочей и защита от царапин.',
        sizes: ['One size'],
        colors: ['Черный', 'Коричневый'],
        inStock: true,
        isNew: true
    },
    3: {
        id: 3,
        name: 'Смарт-часы',
        category: 'Электроника',
        subcategory: 'Гаджеты',
        price: 24990,
        oldPrice: 29990,
        rating: 4.7,
        reviews: 203,
        image: watch,
        images: [
            watch,
            watch2,
            watch3
        ],
        description: 'Умные часы с AMOLED-дисплеем, GPS, мониторингом сердечного ритма и отслеживанием сна. Водонепроницаемость 5ATM. Время автономной работы до 7 дней. Поддержка уведомлений и возможность ответа на звонки.',
        sizes: ['One size'],
        colors: ['Черный', 'Серебристый'],
        inStock: true,
        discount: 17
    },
    4: {
        id: 4,
        name: 'Дизайнерские кроссовки',
        category: 'Обувь',
        subcategory: 'Кроссовки',
        price: 8990,
        rating: 4.8,
        reviews: 156,
        image: asics,
        images: [
            asics,
            asics2,
            asics3
        ],
        description: 'Стильные кроссовки из высококачественной замши и текстиля. Амортизирующая подошва обеспечивает комфорт при длительной ходьбе. Дышащий материал позволяет ногам оставаться сухими. Идеальный выбор для повседневной носки.',
        sizes: ['36', '37', '38', '39', '40', '41', '42'],
        colors: ['Белый', 'Черный', 'Красный'],
        inStock: true,
        isNew: true
    },
    5: {
        id: 5,
        name: 'Шерстяной свитер',
        category: 'Одежда',
        subcategory: 'Свитеры',
        price: 5990,
        oldPrice: 8990,
        rating: 4.6,
        reviews: 92,
        image: switer,
        images: [
            switer,
            switer2,
            switer3
        ],
        description: 'Теплый свитер из мериносовой шерсти. Мягкий, не колется, отлично сохраняет тепло. Классический крой и элегантный дизайн делают его идеальным выбором для холодного сезона. Подходит для офиса и повседневной носки.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Бежевый', 'Серый', 'Синий'],
        inStock: true,
        discount: 33
    },
    6: {
        id: 6,
        name: 'Солнцезащитные очки',
        category: 'Аксессуары',
        subcategory: 'Очки',
        price: 3990,
        rating: 4.5,
        reviews: 67,
        image: glasses,
        images: [
            glasses,
            glasses2,
            glasses3
        ],
        description: 'Стильные солнцезащитные очки с UV-защитой. Легкая оправа из ацетата, устойчивая к царапинам. Поляризационные линзы обеспечивают четкое зрение даже в яркий солнечный день. Комплектуется чехлом и салфеткой.',
        sizes: ['One size'],
        colors: ['Черный', 'Золотой', 'Серебристый'],
        inStock: true,
        isNew: true
    },
    7: {
        id: 7,
        name: 'Джинсы Slim Fit',
        category: 'Одежда',
        subcategory: 'Джинсы',
        price: 4990,
        rating: 4.7,
        reviews: 178,
        image: jeans,
        images: [
            jeans,
            jeans2,
            jeans3
        ],
        description: 'Классические джинсы slim fit из высококачественного денима. Эластичная ткань обеспечивает свободу движений. Идеально сидят по фигуре, подчеркивая силуэт. Подходят для создания как повседневных, так и более формальных образов.',
        sizes: ['28', '29', '30', '31', '32', '33', '34'],
        colors: ['Синий', 'Черный', 'Серый'],
        inStock: true
    },
    8: {
        id: 8,
        name: 'Беспроводные наушники',
        category: 'Электроника',
        subcategory: 'Аудио',
        price: 12990,
        rating: 4.9,
        reviews: 245,
        image: airpods,
        images: [
            airpods,
            airpods2,
            airpods3
        ],
        description: 'Высококачественные беспроводные наушники с активным шумоподавлением. Поддержка Hi-Res Audio, время работы до 30 часов. Быстрая зарядка: 10 минут зарядки дают 4 часа воспроизведения. Эргономичный дизайн для комфортного ношения.',
        sizes: ['One size'],
        colors: ['Белый', 'Черный'],
        inStock: true,
        isNew: true
    },
    9: {
        id: 9,
        name: 'Кожаный ремень',
        category: 'Аксессуары',
        subcategory: 'Ремни',
        price: 2490,
        rating: 4.4,
        reviews: 43,
        image: remen,
        images: [
            remen,
            remen2,
            remen3
        ],
        description: 'Классический ремень из натуральной кожи. Металлическая пряжка с матовым покрытием. Универсальный дизайн подходит как для делового костюма, так и для повседневной одежды. Доступен в нескольких размерах.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Черный', 'Коричневый'],
        inStock: true
    },
    10: {
        id: 10,
        name: 'Пальто Oversize',
        category: 'Одежда',
        subcategory: 'Верхняя одежда',
        price: 15990,
        oldPrice: 19990,
        rating: 4.8,
        reviews: 112,
        image: palto,
        images: [
            palto,
            palto2,
            palto3
        ],
        description: 'Модное пальто oversize из высококачественной шерстяной ткани. Свободный крой, глубокие карманы и элегантный воротник. Идеально подходит для создания стильных городских образов. Утепленная подкладка обеспечивает комфорт в холодную погоду.',
        sizes: ['S', 'M', 'L'],
        colors: ['Черный', 'Бежевый', 'Серый'],
        inStock: true,
        discount: 20
    },
    11: {
        id: 11,
        name: 'Рюкзак городской',
        category: 'Аксессуары',
        subcategory: 'Сумки',
        price: 6990,
        rating: 4.6,
        reviews: 89,
        image: bag,
        images: [
            bag,
            bag2,
            bag3
        ],
        description: 'Стильный городской рюкзак из водоотталкивающей ткани. Отделение для ноутбука до 15 дюймов, множество карманов для организации вещей. Удобные лямки с мягкой подкладкой. Идеальный выбор для работы, учебы и путешествий.',
        sizes: ['One size'],
        colors: ['Черный', 'Оливковый'],
        inStock: true
    },
    12: {
        id: 12,
        name: 'Платье-миди',
        category: 'Одежда',
        subcategory: 'Платья',
        price: 8990,
        rating: 4.7,
        reviews: 134,
        image: plate,
        images: [
            plate,
            plate2,
            plate3
        ],
        description: 'Элегантное платье-миди из качественного трикотажа. Приталенный силуэт, V-образный вырез и юбка длины миди. Подходит как для офиса, так и для вечерних выходов. Мягкая ткань приятна к телу и не требует особого ухода.',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Черный', 'Красный', 'Синий'],
        inStock: true,
        isNew: true
    }
};

const Product = () => {
    const { id } = useParams();
    const product = productData[id];
    const addItem = useCartStore((state) => state.addItem);
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        return <div className="container">Товар не найден</div>;
    }

    const navigate = useNavigate()

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        addItem({
            ...product,
            size: selectedSize,
            color: selectedColor
        });
    };

    const { isAuthenticated } = useAuthStore();

    return (
        <div className="container">
            <div className={styles.product}>
                <div className={styles.gallery}>
                    <div className={styles.main_image}>
                        <img src={product.images?.[selectedImage] || product.image} alt={product.name} />
                    </div>
                    {product.images && (
                        <div className={styles.thumbnails}>
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    className={`${styles.thumbnail} ${selectedImage === idx ? styles.active : ''}`}
                                    onClick={() => setSelectedImage(idx)}
                                >
                                    <img src={img} alt={`${product.name} ${idx + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.info}>
                    <span className={styles.category}>{product.category}</span>
                    <h1 className={styles.title}>{product.name}</h1>

                    <div className={styles.price_container}>
                        <span className={styles.price}>{product.price} ₽</span>
                        {product.oldPrice && (
                            <span className={styles.old_price}>{product.oldPrice} ₽</span>
                        )}
                    </div>

                    {product.sizes && (
                        <div className={styles.section}>
                            <h3 className={styles.section_title}>Размер</h3>
                            <div className={styles.size_options}>
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`${styles.size_btn} ${selectedSize === size ? styles.active : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.colors && (
                        <div className={styles.section}>
                            <h3 className={styles.section_title}>Цвет</h3>
                            <div className={styles.color_options}>
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        className={`${styles.color_btn} ${selectedColor === color ? styles.active : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={styles.stock}>
                        {product.inStock ? (
                            <span className={styles.in_stock}>✓ В наличии</span>
                        ) : (
                            <span className={styles.out_of_stock}>✗ Нет в наличии</span>
                        )}
                    </div>

                    <button onClick={handleAddToCart} className={styles.add_to_cart_btn} disabled={!product.inStock}>
                        Добавить в корзину
                    </button>

                    <div className={styles.description}>
                        <h3 className={styles.section_title}>Описание</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;