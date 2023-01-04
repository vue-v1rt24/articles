import Component from '../core/Component';
import LocalStorageUtils from '../utils/localStorage.utils';

class HeaderComponent extends Component {
    constructor(id: string) {
        super(id);
    }

    init() {
        if (LocalStorageUtils.localStorageGet('visited')) {
            return this.headerHandler();
        }

        this.headerHandler = this.headerHandler.bind(this);
        this.$el.querySelector('.js-header')!.addEventListener('click', this.headerHandler);
    }

    private headerHandler() {
        this.hide();
        document.querySelector('.w-container')?.classList.remove('hide');
        LocalStorageUtils.localStorageSet('visited', 'true');
    }
}

export default HeaderComponent;