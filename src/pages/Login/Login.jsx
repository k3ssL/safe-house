import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('Заполните все поля');
            return;
        }

        const success = login(formData.email, formData.password);

        if (success) {
            navigate('/');
        } else {
            setError('Неверный email или пароль');
        }
    };

    return (
        <div className={styles.login_page}>
            <div className="container">
                <div className={styles.login_container}>
                    <div className={styles.login_card}>
                        <div className={styles.logo}>
                            <span>БЕЗОПАСНЫЙ ДОМ</span>
                            {/*<span className={styles.dot}>.</span>*/}
                        </div>

                        <h1 className={styles.title}>Добро пожаловать</h1>
                        <p className={styles.subtitle}>Войдите в свой аккаунт</p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.input_group}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="password">Пароль</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                />
                            </div>

                            {error && <div className={styles.error}>{error}</div>}

                            <button type="submit" className={styles.login_btn}>
                                Войти
                            </button>
                        </form>
                        <p className={styles.register_link}>
                            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;