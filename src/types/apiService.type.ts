export interface ICreatePost {
    title: string;
    fulltext: string;
    type: string;
    date: Date;
}

export interface IGetPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostStore {
    id: string;
    title: string;
}