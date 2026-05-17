import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import styles from './ProductCard.module.css';
import useAuthStore from "../../store/authStore";

const ProductCard = ({ product }) => {
    const addItem = useCartStore((state) => state.addItem);
    const [showNotification, setShowNotification] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthStore();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        addItem(product);

        // Показываем анимацию добавления
        setIsAdded(true);
        setShowNotification(true);

        // Скрываем уведомление через 2 секунды
        setTimeout(() => {
            setShowNotification(false);
            setIsAdded(false);
        }, 2000);
    };

    return (
        <>
            <Link to={`/product/${product.id}`} className={styles.card}>
                <div className={styles.image_container}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                    {product.isNew && <span className={styles.badge_new}>Новинка</span>}
                    {product.discount && (
                        <span className={styles.badge_discount}>-{product.discount}%</span>
                    )}
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.category}>{product.category}</p>

                    <div className={styles.price_container}>
                        <span className={styles.price}>{product.price} ₽</span>
                        {product.oldPrice && (
                            <span className={styles.old_price}>{product.oldPrice} ₽</span>
                        )}
                    </div>

                    <button onClick={handleAddToCart} className={styles.add_btn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        В корзину
                    </button>
                </div>
            </Link>

            {/* Toast уведомление */}
            {showNotification && (
                <div className={styles.notification}>
                    <div className={styles.notification_content}>
                        <div className={styles.notification_icon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div className={styles.notification_text}>
                            <span className={styles.notification_title}>Товар добавлен</span>
                            <span className={styles.notification_product}>{product.name}</span>
                        </div>
                        <Link
                            to="/cart"
                            className={styles.notification_link}
                            onClick={() => setShowNotification(false)}
                        >
                            В корзину
                        </Link>
                    </div>
                    <div className={styles.notification_progress}></div>
                </div>
            )}
        </>
    );
};

export default ProductCard;