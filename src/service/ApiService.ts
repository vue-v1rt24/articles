import {ICreatePost} from '../types/apiService.type';
import {fetchQuery} from '../utils/fetchQuery';

class ApiService {
    constructor(private baseUrl: string) {
    }

    async createPost(postData: ICreatePost) {
        try {
            await fetchQuery(`${this.baseUrl}/posts`, 'POST', postData);
        } catch (error) {
            throw new Error('Ошибка создания записи', {cause: error});
        }
    }

    async getPosts() {
        try {
            return await fetchQuery(`${this.baseUrl}/users/1/posts`);
        } catch (error) {
            throw new Error('Ошибка при получении всех записей', {cause: error});
        }
    }

    async getPostId(id: string) {
        try {
            return await fetchQuery(`${this.baseUrl}/posts/${id}`);
        } catch (error) {
            throw new Error('Ошибка при получении записи', {cause: error});
        }
    }
}

export default new ApiService(import.meta.env.VITE_BASE_URL);