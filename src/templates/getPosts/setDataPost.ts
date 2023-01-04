import template from './index.html?raw';
import {IGetPosts, IPostStore} from '../../types/apiService.type';
import LocalStorageUtils from '../../utils/localStorage.utils';

const setDataPost = (post: IGetPosts, footerBx: boolean = true) => {
    const postsStorage: IPostStore[] = LocalStorageUtils.localStorageGet('posts') || [];
    const candidate = postsStorage.find(p => p.id === post.id + '');

    const button = candidate
        ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-title="${post.title}">Удалить</button>`
        : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Сохранить</button>`;

    return template
        .replace(/{{post_name}}/, post.title)
        .replace(/{{post_id}}/, post.id + '')
        .replace(/{{post_desc}}/, post.body)
        .replace(/{{post_footer}}/, footerBx ? '' : 'hide')
        .replace(/{{footer_content}}/, button);
};

export default setDataPost;