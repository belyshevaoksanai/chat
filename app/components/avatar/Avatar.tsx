import styles from './styles.module.scss';
import Image from 'next/image';

interface AvatarProps {
    imageUrl: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 26 }) => (
    <div className={styles.container}>
        <div className={styles.avatarImage}>
            <Image alt="avatar" src={imageUrl} width={size} height={size} />
        </div>
    </div>
)
