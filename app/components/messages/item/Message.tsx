import styles from './style.module.scss';
import Image from 'next/image';
import dayjs from 'dayjs';
import leftMessageArrow from '../../../assets/icons/left-message-arrow.svg';
import rightMessageArrow from '../../../assets/icons/right-message-arrow.svg';

interface MessageProps {
    direction: 'incoming' | 'outcoming';
    text: string;
    time: string;
    user?: {
        name: string;
        post: string;
    }
}

export const Message: React.FC<MessageProps> = ({ direction, text, time, user }) => (
    <div className={`${styles.messageContainer} ${direction === 'incoming' ? styles.incoming : styles.outcoming}`}>
        <Image src={direction === 'incoming' ? leftMessageArrow : rightMessageArrow} alt="arrow" className={styles.arrow} />
        <div className={styles.message}>
            <div className={styles.textContainer}>
                {user?.name && (
                    <div className={styles.userInfo}>
                        <span>{user.name}</span>
                        <span>{user.post}</span>
                    </div>
                )}
                {text}
            </div>
            <span className={styles.time}>{dayjs(time).format('hh:mm A')}</span>
        </div>
    </div>
)
