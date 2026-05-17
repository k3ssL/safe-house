import {Link, useNavigate} from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import styles from './ProductCard.module.css';
import useAuthStore from "../../store/authStore";

const ProductCard = ({ product }) => {
    const addItem = useCartStore((state) => state.addItem);

    const navigate = useNavigate()

    const handleAddToCart = (e) => {
        if (!isAuthenticated) navigate('/login')
        e.preventDefault();
        addItem(product);
    };

    const { isAuthenticated } = useAuthStore();

    return (
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
    );
};

export default ProductCard;