import Component from '../core/Component';
import LocalStorageUtils from '../utils/localStorage.utils';
import {IPostStore} from '../types/apiService.type';
import ApiService from '../service/ApiService';
import setDataPost from '../templates/getPosts/setDataPost';
import LoaderComponent from './LoaderComponent';

class FavoriteComponent extends Component {
    private loader: LoaderComponent;

    constructor(id: string, {loader}: any) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.postHandler = this.postHandler.bind(this);
        this.$el.addEventListener('click', this.postHandler);
    }

    onShow() {
        const posts: IPostStore[] = LocalStorageUtils.localStorageGet('posts') || [];
        this.$el.insertAdjacentHTML('beforeend', this.renderList(posts));
    }

    onHide() {
        this.$el.textContent = '';
    }

    private async postHandler(evt: Event) {
        const target = evt.target as HTMLElement;

        if (target.matches('.js-favorite')) {
            evt.preventDefault();
            this.$el.textContent = '';
            const id = target.getAttribute('href') as string;
            this.loader.show();

            try {
                const post = await ApiService.getPostId(id);
                this.$el.insertAdjacentHTML('beforeend', setDataPost(post, false));
            } catch (error) {
                console.log(error);
            } finally {
                this.loader.hide();
            }
        }
    }

    private renderList(posts: IPostStore[]) {
        let res = '';

        if (posts.length) {
            res = `
                <ul>
                    ${posts.map(post => `<li><a href="${post.id}" class="js-favorite">${post.title}</a></li>`).join('')}
                </ul>
            `;
        } else {
            res = '<div class="center">Вы пока ничего не добавили</div>';
        }

        return res;
    }
}

export default FavoriteComponent;