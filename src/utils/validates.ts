
export const required = (value: any) => (value ? undefined : "Не может быть пустым");
export const minMax = (value: any) => value && value < 5 && value > 0 ? undefined : 'Не может быть пустым, значение от 1 до 4';
export const afterZero = (value: any) => value && value > 0 ? undefined : 'Не может быть пустым, значение больше нуля';