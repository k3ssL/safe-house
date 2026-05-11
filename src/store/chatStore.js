import { create } from 'zustand';

const useChatStore = create((set, get) => ({
    messages: [
        {
            id: '1',
            userId: 'support',
            userName: 'Поддержка БАСТИОН',
            text: 'Добро пожаловать в чат поддержки! Чем можем помочь?',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            isSupport: true
        }
    ],
    isOpen: false,

    sendMessage: (text, userId, userName) => {
        const newMessage = {
            id: Date.now().toString(),
            userId: userId || 'user',
            userName: userName || 'Вы',
            text,
            timestamp: new Date().toISOString(),
            isSupport: false
        };

        set((state) => ({
            messages: [...state.messages, newMessage]
        }));

        // Имитация ответа поддержки через 1-2 секунды
        setTimeout(() => {
            const supportResponse = {
                id: (Date.now() + 1).toString(),
                userId: 'support',
                userName: 'Поддержка БАСТИОН',
                text: getAutoResponse(text),
                timestamp: new Date().toISOString(),
                isSupport: true
            };
            set((state) => ({
                messages: [...state.messages, supportResponse]
            }));
        }, Math.random() * 1000 + 500);
    },

    toggleChat: () => {
        set((state) => ({ isOpen: !state.isOpen }));
    }
}));

function getAutoResponse(message) {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('доставк') || lowerMsg.includes('доставка')) {
        return 'Доставка осуществляется в течение 2-5 рабочих дней. Стоимость доставки рассчитывается при оформлении заказа.';
    }
    if (lowerMsg.includes('возврат') || lowerMsg.includes('обмен')) {
        return 'Вы можете вернуть товар в течение 14 дней с момента получения. Подробные условия возврата есть в разделе "Помощь".';
    }
    if (lowerMsg.includes('оплат') || lowerMsg.includes('оплата')) {
        return 'Мы принимаем оплату банковскими картами, PayPal и наличными при получении.';
    }
    if (lowerMsg.includes('скидк') || lowerMsg.includes('акци')) {
        return 'Подпишитесь на нашу рассылку, чтобы первыми узнавать о скидках и акциях!';
    }

    return 'Спасибо за ваше сообщение! Наш специалист свяжется с вами в ближайшее время.';
}

export default useChatStore;