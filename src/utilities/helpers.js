export const extractCharacter = (char) => {
    const person = char.split('/')[4];
    const id = char.split('/')[5];
    return person.substr(0, 1).toUpperCase() + person.substr(1) + '-' + id;
}

export const formatYear = (date) => {
    const y = new Date(date);
    const year = y.getFullYear();
    return year;
}

