export const convertDateToUnixTimestamp = (date) => {
    // convert to milliseconds to seconds
    // UNIX TIME STAMPS FOR FINN
    return Math.floor(date.getTime()/ 1000)
};

export const convertUnixTimestamptoDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).toLocaleDateString()
}
// UNIX TIME STAMPS FOR FINN
export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days + 7  * weeks)
    newDate.setMonth(newDate.getMonth() + months)
    newDate.setFullYear(newDate.getFullYear() + years)
}