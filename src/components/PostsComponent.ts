import Component from '../core/Component';
import ApiService from '../service/ApiService';
import {IGetPosts, IPostStore} from '../types/apiService.type';
import setDataPost from '../templates/getPosts/setDataPost';
import LoaderComponent from './LoaderComponent';
import localStorageUtils from '../utils/localStorage.utils';

class PostsComponent extends Component {
    private loader: LoaderComponent;

    constructor(id: string, {loader}: any) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.postsHandler = this.postsHandler.bind(this);
        this.$el.addEventListener('click', this.postsHandler);
    }

    async onShow() {
        this.loader.show();

        try {
            const posts: IGetPosts[] = await ApiService.getPosts();

            const htmlPosts = posts.map(post => setDataPost(post));

            this.$el.insertAdjacentHTML('beforeend', htmlPosts.join(''));
        } catch (error) {
            console.log(error);
        } finally {
            this.loader.hide();
        }
    }

    onHide() {
        this.$el.textContent = '';
    }

    private postsHandler(evt: Event) {
        const target = evt.target as HTMLElement;
        const id = target.dataset.id || '';

        if (id) {
            const title = target.dataset.title || '';
            const posts: IPostStore[] = localStorageUtils.localStorageGet('posts') || [];
            const candidate = posts.find(post => post.id === id);

            if (candidate) {
                posts.splice(posts.indexOf(candidate), 1);

                target.textContent = 'Сохранить';
                target.classList.remove('button-danger');
                target.classList.add('button-primary');
            } else {
                posts.push({
                    id,
                    title,
                });

                target.textContent = 'Удалить';
                target.classList.remove('button-primary');
                target.classList.add('button-danger');
            }

            localStorageUtils.localStorageSet('posts', posts);
        }
    }
}

export default PostsComponent;