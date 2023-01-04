class Validators {
    static required(val: string) {
        return val && val.trim().length > 0;
    }

    static minLength(num: number) {
        return (val: string) => val.length >= num;
    }
}

export default Validators;