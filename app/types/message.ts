export enum ItemEnum {
    Message = 'message',
    Date = 'date'
}

type IDate = {
    type: ItemEnum.Date;
    date: string;
}

export type IUser = {
    name: string;
    post: string;
    avatar: string;
}

export type IMessage = {
    type: ItemEnum.Message;
    direction: 'incoming' | 'outcoming';
    text: string;
    time: string;
    user?: IUser;
}

export type IItem = IDate | IMessage;
