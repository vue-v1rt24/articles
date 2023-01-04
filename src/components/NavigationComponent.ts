import Component from '../core/Component';
import {INavigationType} from '../types/navigation.type';

class NavigationComponent extends Component {
    private components: INavigationType[] | null;

    constructor(id: string) {
        super(id);
        this.components = null;
    }

    init() {
        this.tabsHandler = this.tabsHandler.bind(this);
        this.$el.addEventListener('click', this.tabsHandler);
    }

    private tabsHandler(evt: Event) {
        const target = evt.target as HTMLElement;

        if (target.matches('.tab')) {
            evt.preventDefault();
            const name = target.dataset.name || '';

            this.$el.querySelector('.tab.active')?.classList.remove('active');
            target.classList.add('active');

            this.TabsContent(name);
        }
    }

    registerTabs(components: INavigationType[]) {
        this.components = components;
    }

    private TabsContent(name: string) {
        if (this.components?.length) {
            for (const component of this.components) {
                component.component.hide();
            }

            const candidate = this.components.find(c => c.name === name);

            if (candidate) {
                candidate.component.show();
            }
        }
    }
}

export default NavigationComponent;