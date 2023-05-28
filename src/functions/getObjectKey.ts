export const getObjectKey = (obj: {}, value: string): string | undefined => {
    return Object.keys(obj).find(key => obj[key] === value);
}