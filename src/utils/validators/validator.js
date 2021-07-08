export const required = (value) => {
    if(value) return undefined

    return 'error message';

}

export const  maxLengthCreator = (maxLenghth) => (value) => {
    if( value.length > maxLenghth) return `Max lenght is ${maxLenghth} symbols`;
    return undefined;
}
