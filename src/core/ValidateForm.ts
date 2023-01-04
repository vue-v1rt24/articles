interface IControl {
    [key: string]: Function[];
}

class ValidateForm {
    constructor(public form: HTMLFormElement, public controls: IControl) {
    }

    isValidate(): boolean {
        let isFormValid = true;

        for (const [title, functs] of Object.entries(this.controls)) {
            let isValid = true;

            for (const funct of functs) {
                isValid = funct(this.form[title].value) && isValid;
            }

            !isValid ? this.setError(this.form[title]) : this.clearError(this.form[title]);

            isFormValid = isValid && isFormValid;
        }

        return isFormValid;
    }

    private setError(el: HTMLInputElement) {
        this.clearError(el);
        el.classList.add('invalid');
        el.insertAdjacentHTML('afterend', '<span class="validation-error">Заполните поле</span>');
    }

    private clearError(el: HTMLInputElement) {
        el.classList.remove('invalid');
        el.nextElementSibling?.remove();
    }

    getFieldsValues() {
        let values: any = {};

        for (const title in this.controls) {
            values[title] = this.form[title].value;
        }

        return values;
    }

    clearForm() {
        this.form.reset();
    }
}

export default ValidateForm;