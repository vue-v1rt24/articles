abstract class Component {
    public $el: HTMLElement;

    protected constructor(id: string) {
        this.$el = document.getElementById(id)!;
        this.init();
    }

    abstract init(): void

    hide() {
        this.$el.classList.add('hide');
        this.onHide();
    }

    show() {
        this.$el.classList.remove('hide');
        this.onShow();
    }

    onHide() {
    }

    onShow() {
    }
}

export default Component;