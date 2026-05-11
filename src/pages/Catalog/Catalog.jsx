import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Catalog.module.css';
import domofon from '../../assets/images/domofon.png';
import camera from '../../assets/images/camera.webp';
import signalization from '../../assets/images/signalization.jpg';
import accessControl from '../../assets/images/accessControl.webp';
import fireSystem from '../../assets/images/fireSystem.jpg';
import sensor from '../../assets/images/sensor.webp';
import videorecorder from '../../assets/images/videodecoder.webp';
import monitor from '../../assets/images/monitor.png';
import powerSupply from '../../assets/images/powerSupply.webp';
import cable from '../../assets/images/cable.jpg';
import smartLock from '../../assets/images/smartLock.jpg';
import intercom from '../../assets/images/intercom.jpg';

// Данные товаров для каталога охранных систем
const allProducts = [
    {
        id: 1,
        name: 'IP-видеодомофон Hikvision',
        category: 'Домофоны',
        subcategory: 'IP-домофоны',
        price: 15990,
        oldPrice: 22990,
        image: domofon,
        rating: 4.8,
        reviews: 124,
        isNew: true,
        inStock: true,
        brand: 'Hikvision',
        type: 'Проводной',
        features: ['Wi-Fi', 'Сенсорный экран', 'Ночное видение'],
        warranty: 3
    },
    {
        id: 2,
        name: 'IP-камера видеонаблюдения',
        category: 'Камеры',
        subcategory: 'IP-камеры',
        price: 8990,
        image: camera,
        rating: 4.9,
        reviews: 87,
        isNew: true,
        inStock: true,
        brand: 'Dahua',
        type: 'Уличная',
        features: ['Full HD', 'ИК-подсветка', 'IP67'],
        warranty: 3
    },
    {
        id: 3,
        name: 'Комплект сигнализации Ajax',
        category: 'Сигнализации',
        subcategory: 'Беспроводные',
        price: 24990,
        oldPrice: 29990,
        image: signalization,
        rating: 4.7,
        reviews: 203,
        discount: 17,
        inStock: true,
        brand: 'Ajax',
        type: 'Беспроводная',
        features: ['Мобильное приложение', 'Датчики движения', 'Сирена'],
        warranty: 3
    },
    {
        id: 4,
        name: 'СКУД контроллер ZKTeco',
        category: 'Контроль доступа',
        subcategory: 'Контроллеры',
        price: 34990,
        image: accessControl,
        rating: 4.8,
        reviews: 156,
        isNew: true,
        inStock: true,
        brand: 'ZKTeco',
        type: 'Биометрический',
        features: ['Отпечатки пальцев', 'RFID-карты', 'ПО в комплекте'],
        warranty: 3
    },
    {
        id: 5,
        name: 'Пожарная сигнализация Болид',
        category: 'Пожарная безопасность',
        subcategory: 'Пожарные системы',
        price: 59990,
        oldPrice: 89990,
        image: fireSystem,
        rating: 4.6,
        reviews: 92,
        discount: 33,
        inStock: true,
        brand: 'Болид',
        type: 'Адресная',
        features: ['Датчики дыма', 'Оповещатели', 'Пульт управления'],
        warranty: 3
    },
    {
        id: 6,
        name: 'Датчик движения Bosch',
        category: 'Датчики',
        subcategory: 'Датчики движения',
        price: 2490,
        image: sensor,
        rating: 4.5,
        reviews: 67,
        isNew: true,
        inStock: true,
        brand: 'Bosch',
        type: 'Инфракрасный',
        features: ['Угол 180°', 'Дальность 15м', 'Иммунитет к животным'],
        warranty: 3
    },
    {
        id: 7,
        name: 'Видеорегистратор 16 каналов',
        category: 'Видеонаблюдение',
        subcategory: 'Видеорегистраторы',
        price: 42990,
        image: videorecorder,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        brand: 'Hikvision',
        type: 'Сетевой',
        features: ['16 каналов', '4K запись', 'Жесткий диск 4TB'],
        warranty: 3
    },
    {
        id: 8,
        name: 'Монитор видеонаблюдения',
        category: 'Видеонаблюдение',
        subcategory: 'Мониторы',
        price: 15990,
        image: monitor,
        rating: 4.9,
        reviews: 245,
        isNew: true,
        inStock: true,
        brand: 'Dahua',
        type: 'LED',
        features: ['24 дюйма', 'Full HD', 'VESA крепление'],
        warranty: 3
    },
    {
        id: 9,
        name: 'Блок питания 12В',
        category: 'Комплектующие',
        subcategory: 'Блоки питания',
        price: 1990,
        image: powerSupply,
        rating: 4.4,
        reviews: 43,
        inStock: true,
        brand: 'GSN',
        type: 'Импульсный',
        features: ['12В 5А', 'Защита от КЗ', 'Индикация'],
        warranty: 3
    },
    {
        id: 10,
        name: 'Умный замок Samsung',
        category: 'Контроль доступа',
        subcategory: 'Умные замки',
        price: 25990,
        oldPrice: 32990,
        image: smartLock,
        rating: 4.8,
        reviews: 112,
        discount: 20,
        inStock: true,
        brand: 'Samsung',
        type: 'Электронный',
        features: ['Bluetooth', 'Пин-код', 'RFID'],
        warranty: 3
    },
    {
        id: 11,
        name: 'Кабель КВК-П 2х0.75',
        category: 'Комплектующие',
        subcategory: 'Кабели',
        price: 350,
        image: cable,
        rating: 4.6,
        reviews: 89,
        inStock: true,
        brand: 'Спецкабель',
        type: 'Комбинированный',
        features: ['2 жилы', 'Коаксиал', '100м бухта'],
        warranty: 3
    },
    {
        id: 12,
        name: 'Переговорное устройство',
        category: 'Домофоны',
        subcategory: 'Аудиодомофоны',
        price: 3490,
        image: intercom,
        rating: 4.7,
        reviews: 134,
        isNew: true,
        inStock: true,
        brand: 'VIZIT',
        type: 'Проводное',
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 3
    }
];

const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'Домофоны', name: 'Домофоны' },
    { id: 'Камеры', name: 'Камеры' },
    { id: 'Видеонаблюдение', name: 'Видеонаблюдение' },
    { id: 'Сигнализации', name: 'Сигнализации' },
    { id: 'Контроль доступа', name: 'Контроль доступа' },
    { id: 'Пожарная безопасность', name: 'Пожарная безопасность' },
    { id: 'Датчики', name: 'Датчики' },
    { id: 'Комплектующие', name: 'Комплектующие' }
];

const sortOptions = [
    { id: 'popular', name: 'Популярные' },
    { id: 'newest', name: 'Новинки' },
    { id: 'price_asc', name: 'Цена: по возрастанию' },
    { id: 'price_desc', name: 'Цена: по убыванию' },
    { id: 'rating', name: 'По рейтингу' },
    { id: 'warranty', name: 'По гарантии' }
];

const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState(allProducts);
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Состояния фильтров
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'popular');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

    // Уникальные бренды и типы для фильтров
    const allBrands = [...new Set(allProducts.flatMap(p => p.brand ? [p.brand] : []))];
    const allTypes = [...new Set(allProducts.flatMap(p => p.type ? [p.type] : []))];

    // Применение фильтров
    useEffect(() => {
        let result = [...products];

        // Поиск
        if (searchQuery) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Категория
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Цена
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Бренды
        if (selectedBrands.length > 0) {
            result = result.filter(p =>
                p.brand && selectedBrands.includes(p.brand)
            );
        }

        // Типы устройств
        if (selectedTypes.length > 0) {
            result = result.filter(p =>
                p.type && selectedTypes.includes(p.type)
            );
        }

        // Только в наличии
        if (inStockOnly) {
            result = result.filter(p => p.inStock);
        }

        // Сортировка
        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case 'price_asc':
                    return a.price - b.price;
                case 'price_desc':
                    return b.price - a.price;
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'newest':
                    return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
                case 'warranty':
                    return (b.warranty || 0) - (a.warranty || 0);
                default:
                    return (b.rating || 0) - (a.rating || 0);
            }
        });

        setFilteredProducts(result);

        // Обновление URL параметров
        const params = {};
        if (selectedCategory !== 'all') params.category = selectedCategory;
        if (sortBy !== 'popular') params.sort = sortBy;
        if (searchQuery) params.search = searchQuery;
        setSearchParams(params);
    }, [selectedCategory, priceRange, selectedBrands, selectedTypes, inStockOnly, sortBy, searchQuery, products]);

    const handleBrandToggle = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleTypeToggle = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const clearFilters = () => {
        setSelectedCategory('all');
        setPriceRange([0, 100000]);
        setSelectedBrands([]);
        setSelectedTypes([]);
        setInStockOnly(false);
        setSearchQuery('');
        setSortBy('popular');
    };

    return (
        <div className={styles.catalog_page}>
            {/* Hero секция каталога */}
            <section className={styles.hero}>
                <div className={styles.hero_bg}>
                    <div className={styles.gradient_overlay}></div>
                </div>
                <div className="container">
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>Каталог систем безопасности</h1>
                        <p className={styles.hero_description}>
                            Профессиональное оборудование для систем безопасности. Только проверенные бренды с гарантией 3 года
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Поиск и сортировка */}
                <div className={styles.catalog_header}>
                    <div className={styles.search_container}>
                        <div className={styles.search_wrapper}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Поиск по названию, категории или бренду..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.search_input}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className={styles.clear_search}>
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    <div className={styles.sort_container}>
                        <label className={styles.sort_label}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6h18M6 12h12M10 18h4"/>
                            </svg>
                            Сортировка:
                        </label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.sort_select}>
                            {sortOptions.map(option => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        className={styles.filter_toggle}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="22 3 2 3 10 13 10 21 14 18 14 13 22 3"/>
                        </svg>
                        Фильтры
                        {(selectedBrands.length > 0 || selectedTypes.length > 0 || inStockOnly || selectedCategory !== 'all') && (
                            <span className={styles.filter_badge}>
                {selectedBrands.length + selectedTypes.length + (inStockOnly ? 1 : 0) + (selectedCategory !== 'all' ? 1 : 0)}
              </span>
                        )}
                    </button>
                </div>

                <div className={styles.catalog_layout}>
                    {/* Фильтры (десктоп) */}
                    <aside className={`${styles.filters} ${isFilterOpen ? styles.filters_open : ''}`}>
                        <div className={styles.filters_header}>
                            <h3 className={styles.filters_title}>Фильтры</h3>
                            <button onClick={clearFilters} className={styles.clear_filters}>
                                Сбросить все
                            </button>
                        </div>

                        {/* Категории */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Категории оборудования</h4>
                            <div className={styles.category_list}>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`${styles.category_btn} ${selectedCategory === cat.id ? styles.active : ''}`}
                                        onClick={() => setSelectedCategory(cat.id)}
                                    >
                                        <span>{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Цена */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Цена, ₽</h4>
                            <div className={styles.price_range}>
                                <div className={styles.price_inputs}>
                                    <input
                                        type="number"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                        className={styles.price_input}
                                        placeholder="от 0"
                                    />
                                    <span>—</span>
                                    <input
                                        type="number"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                        className={styles.price_input}
                                        placeholder="до 100000"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100000"
                                    step="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    className={styles.price_slider}
                                />
                            </div>
                        </div>

                        {/* Бренды */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Производитель</h4>
                            <div className={styles.checkbox_group}>
                                {allBrands.map(brand => (
                                    <label key={brand} className={styles.checkbox_label}>
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandToggle(brand)}
                                            className={styles.checkbox}
                                        />
                                        <span>{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Тип устройства */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Тип устройства</h4>
                            <div className={styles.checkbox_group}>
                                {allTypes.map(type => (
                                    <label key={type} className={styles.checkbox_label}>
                                        <input
                                            type="checkbox"
                                            checked={selectedTypes.includes(type)}
                                            onChange={() => handleTypeToggle(type)}
                                            className={styles.checkbox}
                                        />
                                        <span>{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Наличие */}
                        <div className={styles.filter_section}>
                            <label className={styles.checkbox_label}>
                                <input
                                    type="checkbox"
                                    checked={inStockOnly}
                                    onChange={(e) => setInStockOnly(e.target.checked)}
                                    className={styles.checkbox}
                                />
                                <span>Только в наличии</span>
                            </label>
                        </div>
                    </aside>

                    {/* Товары */}
                    <main className={styles.products_area}>
                        <div className={styles.results_info}>
                            <span>Найдено {filteredProducts.length} товаров</span>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className={styles.no_results}>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                </svg>
                                <h3>Оборудование не найдено</h3>
                                <p>Попробуйте изменить параметры фильтрации или поиска</p>
                                <button onClick={clearFilters} className={styles.reset_btn}>
                                    Сбросить фильтры
                                </button>
                            </div>
                        ) : (
                            <div className={styles.products_grid}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Catalog;