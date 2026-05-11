import { useState, useRef, useEffect } from 'react';
import useChatStore from '../../store/chatStore';
import useAuthStore from '../../store/authStore';
import styles from './Chat.module.css';

const Chat = () => {
    const { messages, isOpen, sendMessage, toggleChat } = useChatStore();
    const { user } = useAuthStore();
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (inputMessage.trim()) {
            sendMessage(inputMessage, user?.id || 'guest', user?.name || 'Гость');
            setInputMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    };

    if (!isOpen) {
        return (
            <button onClick={toggleChat} className={styles.chat_button}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span className={styles.badge}>1</span>
            </button>
        );
    }

    return (
        <div className={styles.chat_window}>
            <div className={styles.chat_header}>
                <div className={styles.header_info}>
                    <div className={styles.status_dot}></div>
                    <span>Поддержка БАСТИОН</span>
                </div>
                <button onClick={toggleChat} className={styles.close_btn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div className={styles.messages_container}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`${styles.message} ${message.isSupport ? styles.support : styles.user}`}
                    >
                        <div className={styles.message_avatar}>
                            {message.isSupport ? '🤖' : user?.avatar ? (
                                <img src={user.avatar} alt={message.userName} />
                            ) : (
                                '👤'
                            )}
                        </div>
                        <div className={styles.message_content}>
                            <div className={styles.message_header}>
                                <span className={styles.message_name}>{message.userName}</span>
                                <span className={styles.message_time}>{formatTime(message.timestamp)}</span>
                            </div>
                            <div className={styles.message_text}>{message.text}</div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className={styles.input_container}>
        <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Напишите сообщение..."
            className={styles.input}
            rows="1"
        />
                <button onClick={handleSend} className={styles.send_btn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Chat;