import avatar1 from '../assets/images/avatar_1.jpg';
import avatar2 from '../assets/images/avatar_2.jpg';
import avatar3 from '../assets/images/avatar_3.jpg';
import { IUser } from '../types/message';

const users: IUser[] = [
    {
        name: 'Aubrey',
        post: 'Product',
        avatar: avatar1.src,
    },
    {
        name: 'Jav',
        post: 'Engineering',
        avatar: avatar2.src,
    },
    {
        name: 'Janet',
        post: 'Engineering',
        avatar: avatar3.src,
    },
    {
        name: 'Janet',
        post: 'Product',
        avatar: avatar3.src,
    }
]

export const getRandomUser = (): IUser => {
    const randomTile = Math.floor(Math.random() * users.length);

    return users[randomTile];
};
