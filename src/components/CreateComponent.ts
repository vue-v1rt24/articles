import Component from '../core/Component';
import Validators from '../core/Validators';
import ValidateForm from '../core/ValidateForm';
import ApiService from '../service/ApiService';

class CreateComponent extends Component {
    private formValidate: ValidateForm;

    constructor(id: string) {
        super(id);

        this.formValidate = new ValidateForm(<HTMLFormElement>this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(3)],
        });
    }

    init() {
        this.submitHandler = this.submitHandler.bind(this);
        this.$el.addEventListener('submit', this.submitHandler);
    }

    private async submitHandler(evt: Event) {
        evt.preventDefault();

        if (this.formValidate.isValidate()) {
            const dataForm = {
                ...this.formValidate.getFieldsValues(),
                type: (this.$el as HTMLElement & { type: any }).type.value,
                date: new Date().toLocaleDateString(),
            };

            try {
                await ApiService.createPost(dataForm);
                this.formValidate.clearForm();
                alert('Запись создана');
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default CreateComponent;