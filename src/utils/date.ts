export const getYears = () => {
    const year = new Date().getFullYear();
    // const years: Array<string> = Array.from({ length: 99 }, (d, i) => '20' + (i < 10 ? '0' : '') + (i + 1));
    const years: Array<number> = [];

    for (let i = 0; i < 100; i++) {
        years.push(year - i);
    }

    return years;
}

export const getToday = (separate = '-') => {
    return `${new Date().getFullYear()}${separate}${new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)}${separate}${new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate()}`;
}