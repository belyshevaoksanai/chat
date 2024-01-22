'use client'

import Avatar from '../avatar';
import MessageItem from './item';
import styles from './styles.module.scss';

import avatar from '../../assets/images/avatar_1.jpg';
import { useMessageStore } from '@/app/store';

export const Messages = () => {
    const messages = useMessageStore((state) => state.messages)

    console.log(messages);

    return (
        <div className={styles.container}>
            {messages.map((item, index) => (
                item.type === 'date' ? (
                    <span className={styles.date} key={item.type + index}>{item.date}</span>
                ) : (
                    <div key={item.type + index} className={`${styles.messageContainer} ${item.direction === 'incoming' ? styles.incoming : styles.outcoming}`}>
                        {item.user?.avatar && <Avatar imageUrl={item.user?.avatar} />}
                        <MessageItem {...item} />
                    </div>
                )
            ))}
        </div>
    )
};
