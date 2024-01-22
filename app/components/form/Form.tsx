'use client'

import styles from './styles.module.scss';
import sendIcon from '../../assets/icons/send.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useMessageStore } from '@/app/store';
import { getRandomUser } from '@/app/utils/getRandomUser';
import { ItemEnum } from '@/app/types/message';

export const Form = () => {
    const send = useMessageStore((state) => state.addMessage);
    const [message, setMessage] = useState('');
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        send({
            type: ItemEnum.Message,
            direction: 'outcoming',
            text: message,
            time: new Date().toISOString(),
        });
        setTimeout(() => {
            send({
                type: ItemEnum.Message,
                direction: 'incoming',
                text: 'Hello!',
                time: new Date().toISOString(),
                user: getRandomUser(),
            });
        }, 1000)
        setMessage('');
    };

    const onMessageChange = (e: React.FormEvent<HTMLInputElement>) => {
        setMessage((e.target as HTMLInputElement).value);
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <input name="message" placeholder='Start typing...' value={message} onChange={onMessageChange} />
            <button type="submit">
                <Image src={sendIcon} alt="send" />
            </button>
        </form>
    )
};
