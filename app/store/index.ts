import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IItem, IMessage } from '../types/message';
import { getDate } from '../utils/getDateFormat';

interface MessageState {
    messages: IItem[],
    addMessage: (m: IMessage) => void,
}

export const useMessageStore = create<MessageState>()(
    persist(
        (set, get) => ({
            messages: [],
            addMessage: (message) => set((state) => {
                if (state.messages.length === 0
                    || (state.messages[state.messages.length - 1].type === 'message'
                        && getDate((state.messages[state.messages.length - 1] as IMessage).time) !== getDate(message.time))) {
                    return {
                        messages: [
                            ...state.messages,
                            {
                                type: 'date',
                                date: getDate(message.time),
                            },
                            message,
                        ]
                    }
                }
                return { messages: [...state.messages, message] }
            }),
        }),
        {
            name: 'message-storage',
        },
    ));
