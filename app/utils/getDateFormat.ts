import dayjs from "dayjs";

export const getDate = (dateISOFormat: string) => {
    return dayjs(dateISOFormat).format('DD/MM/YYYY');
}
