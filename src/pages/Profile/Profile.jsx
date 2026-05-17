import { useState } from 'react';
import useAuthStore from '../../store/authStore';
import useCartStore from '../../store/cartStore';
import styles from './Profile.module.css';

const Profile = () => {
    const { user, updateProfile, logout } = useAuthStore();
    const { getTotalItems, getTotalPrice } = useCartStore();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData);
        setIsEditing(false);
    };

    const orders = [
        {
            id: 'ORD-001',
            date: '2024-01-15',
            total: 8990,
            status: 'Доставлен',
            items: 2
        },
        {
            id: 'ORD-002',
            date: '2024-01-20',
            total: 12990,
            status: 'В пути',
            items: 1
        }
    ];

    return (
        <div className="container">
            <div className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles.avatar_container}>
                        <img src={user?.avatar} alt={user?.name} className={styles.avatar} />
                        {/*<button className={styles.change_avatar_btn}>*/}
                        {/*    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
                        {/*        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/>*/}
                        {/*        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                    </div>
                    <div className={styles.user_info}>
                        {isEditing ? (
                            <form onSubmit={handleSubmit} className={styles.edit_form}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                                <div className={styles.edit_actions}>
                                    <button type="submit" className={styles.save_btn}>Сохранить</button>
                                    <button type="button" onClick={() => setIsEditing(false)} className={styles.cancel_btn}>
                                        Отмена
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <h1 className={styles.name}>{user?.name}</h1>
                                <p className={styles.email}>{user?.email}</p>
                                <button onClick={() => setIsEditing(true)} className={styles.edit_btn}>
                                    Редактировать профиль
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat_card}>
                        <span className={styles.stat_value}>{getTotalItems()}</span>
                        <span className={styles.stat_label}>Товаров в корзине</span>
                    </div>
                    <div className={styles.stat_card}>
                        <span className={styles.stat_value}>{getTotalPrice()} ₽</span>
                        <span className={styles.stat_label}>Сумма корзины</span>
                    </div>
                    <div className={styles.stat_card}>
                        <span className={styles.stat_value}>{orders.length}</span>
                        <span className={styles.stat_label}>Заказов</span>
                    </div>
                    <div className={styles.stat_card}>
            <span className={styles.stat_value}>
              {new Date(user?.joinedAt).toLocaleDateString('ru-RU')}
            </span>
                        <span className={styles.stat_label}>Дата регистрации</span>
                    </div>
                </div>

                <div className={styles.orders_section}>
                    <h2 className={styles.section_title}>История заказов</h2>

                    {orders.length === 0 ? (
                        <div className={styles.no_orders}>
                            <p>У вас пока нет заказов</p>
                        </div>
                    ) : (
                        <div className={styles.orders_list}>
                            {orders.map(order => (
                                <div key={order.id} className={styles.order_card}>
                                    <div className={styles.order_header}>
                                        <span className={styles.order_id}>Заказ #{order.id}</span>
                                        <span className={`${styles.order_status} ${styles[order.status === 'Доставлен' ? 'delivered' : 'shipping']}`}>
                      {order.status}
                    </span>
                                    </div>
                                    <div className={styles.order_details}>
                                        <span>{new Date(order.date).toLocaleDateString('ru-RU')}</span>
                                        <span>{order.items} товара</span>
                                        <span className={styles.order_total}>{order.total} ₽</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button onClick={logout} className={styles.logout_btn}>
                    Выйти из аккаунта
                </button>
            </div>
        </div>
    );
};

export default Profile;