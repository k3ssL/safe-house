import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useAuthStore from '../../store/authStore';
import styles from './Cart.module.css';

const Cart = () => {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
    const { isAuthenticated } = useAuthStore();
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const totalPrice = getTotalPrice();
    const deliveryPrice = totalPrice > 5000 ? 0 : 500;
    const finalPrice = totalPrice + deliveryPrice;

    const handleCheckout = () => {
        setIsAnimating(true);
        setShowOrderModal(true);

        // Имитация отправки заказа
        setTimeout(() => {
            setIsAnimating(false);
            setIsOrderPlaced(true);

            // Создаем конфетти
            createConfetti();

            // Очищаем корзину после успешного заказа
            setTimeout(() => {
                clearCart();
                setShowOrderModal(false);
                setIsOrderPlaced(false);
            }, 3000);
        }, 1500);
    };

    const createConfetti = () => {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9', '#ff69b4', '#a8e6cf'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = styles.confetti;
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = Math.random() * 8 + 4 + 'px';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    };

    if (items.length === 0) {
        return (
            <div className="container">
                <div className={styles.empty_cart}>
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <h2>Корзина пуста</h2>
                    <p>Добавьте товары из каталога, чтобы оформить заказ</p>
                    <Link to="/" className={styles.continue_shopping_btn}>
                        Перейти к покупкам
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className={styles.cart}>
                <h1 className={styles.title}>Корзина</h1>

                <div className={styles.cart_content}>
                    <div className={styles.items_list}>
                        {items.map(item => (
                            <div key={item.id} className={styles.cart_item}>
                                <div className={styles.item_image}>
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <div className={styles.item_info}>
                                    <Link to={`/product/${item.id}`} className={styles.item_name}>
                                        {item.name}
                                    </Link>
                                    {item.size && (
                                        <span className={styles.item_meta}>Размер: {item.size}</span>
                                    )}
                                    {item.color && (
                                        <span className={styles.item_meta}>Цвет: {item.color}</span>
                                    )}
                                    <span className={styles.item_price}>{item.price} ₽</span>
                                </div>

                                <div className={styles.item_quantity}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className={styles.qty_btn}
                                    >
                                        -
                                    </button>
                                    <span className={styles.qty_value}>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className={styles.qty_btn}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={styles.item_total}>
                                    {item.price * item.quantity} ₽
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className={styles.remove_btn}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        ))}

                        <button onClick={clearCart} className={styles.clear_cart_btn}>
                            Очистить корзину
                        </button>
                    </div>

                    <div className={styles.summary}>
                        <h2 className={styles.summary_title}>Итого</h2>

                        <div className={styles.summary_row}>
                            <span>Товары ({items.reduce((sum, i) => sum + i.quantity, 0)} шт.)</span>
                            <span>{totalPrice} ₽</span>
                        </div>

                        <div className={styles.summary_row}>
                            <span>Доставка</span>
                            <span>{deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`}</span>
                        </div>

                        {deliveryPrice > 0 && (
                            <div className={styles.delivery_note}>
                                Бесплатная доставка при заказе от 5000 ₽
                            </div>
                        )}

                        <div className={styles.summary_total}>
                            <span>К оплате</span>
                            <span className={styles.total_price}>{finalPrice} ₽</span>
                        </div>

                        <button
                            className={styles.checkout_btn}
                            disabled={!isAuthenticated}
                            onClick={handleCheckout}
                        >
                            {isAuthenticated ? 'Оформить заказ' : 'Войдите, чтобы оформить заказ'}
                        </button>

                        {!isAuthenticated && (
                            <p className={styles.auth_note}>
                                <Link to="/login">Войдите</Link> в аккаунт для оформления заказа
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Модальное окно заказа */}
            {showOrderModal && (
                <div className={styles.order_overlay}>
                    <div className={`${styles.order_modal} ${isOrderPlaced ? styles.order_modal_success : ''}`}>
                        {!isOrderPlaced ? (
                            <>
                                <div className={styles.order_loading}>
                                    <div className={styles.spinner}>
                                        <svg viewBox="0 0 50 50">
                                            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
                                        </svg>
                                    </div>
                                    <h3>Оформление заказа...</h3>
                                    <p>Пожалуйста, подождите</p>
                                </div>
                                <div className={styles.order_progress}>
                                    <div className={styles.progress_bar}>
                                        <div className={styles.progress_fill}></div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={styles.order_success}>
                                <div className={styles.success_icon}>
                                    <svg viewBox="0 0 52 52">
                                        <circle cx="26" cy="26" r="25" fill="none" strokeWidth="2"/>
                                        <path fill="none" strokeWidth="4" d="M14 27l7 7 16-16"/>
                                    </svg>
                                </div>
                                <h3>Заказ оформлен!</h3>
                                <p>Спасибо за покупку! Мы свяжемся с вами в ближайшее время для подтверждения заказа.</p>
                                <div className={styles.order_details}>
                                    <span>Номер заказа: #{(Math.random() * 1000000).toFixed(0)}</span>
                                    <span>Сумма: {finalPrice} ₽</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;