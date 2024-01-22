import styles from './styles.module.scss';
import Image from 'next/image';

interface AvatarProps {
    imageUrl: string;
    size?: number;
    isOnline?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 26, isOnline }) => (
    <div className={styles.container}>
        <div className={`${styles.avatarImage} ${isOnline ? styles.online : ''}`}>
            <Image alt="avatar" src={imageUrl} width={size} height={size} />
        </div>
    </div>
)
