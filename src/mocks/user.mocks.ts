import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name : 'SamuelFerreira',
        company : 'SQG Info',
        location : 'São paulo',
        bio : 'Im a developer',
        avatar_url: 'https://nutroutine.blob.core.windows.net/users/avatars/people/avatar7_big.png',
        email : 'samurodrigo@hotmail.com'
    },
    {
        name : 'ValeskaFerreira',
        company : 'Dona de casa',
        location : 'São paulo',
        bio : 'Eu sou uma dona de casa feliz!',
        avatar_url: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        email : 'lequynha@hotmail.com'
    }
];

export const USER_LIST = userList;

