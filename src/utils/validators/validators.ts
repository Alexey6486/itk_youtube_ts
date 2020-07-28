
export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    }
    return 'Field is required';
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) {
        return 'Max length exceeded';
    } else if (value && value.length < maxLength) {
        return undefined;
    } else {
        return 'Field is required';
    }
}