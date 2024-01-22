import styles from './style.module.scss';
import avatar1 from '../../assets/images/avatar_1.jpg';
import avatar2 from '../../assets/images/avatar_2.jpg';
import avatar3 from '../../assets/images/avatar_3.jpg';
import kebabIcon from '../../assets/icons/kebab.svg';
import AvatarList from '../avatar-list';
import Image from 'next/image';

export const Header = () => (
    <div className={styles.header}>
        <AvatarList avatars={[
            avatar1.src,
            avatar2.src,
            avatar3.src
        ]} />
        <div className={styles.titleContainer}>
            <h2 className={styles.groupName}>🦄 Team Unicorns</h2>
            <span className={styles.lastTime}>last seen 45 minutes ago</span>
        </div>
        <div>
            <Image src={kebabIcon} alt="kebab" />
        </div>
    </div>
)
