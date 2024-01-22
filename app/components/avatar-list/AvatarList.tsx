import Avatar from '../avatar';
import styles from './style.module.scss';

interface AvatarListProps {
    avatars: string[];
}

export const AvatarList: React.FC<AvatarListProps> = ({avatars}) => (
    <div className={styles.container}>
        {avatars.map((avatar) => (
            <Avatar imageUrl={avatar} key={avatar} />
        ))}
    </div>
)
