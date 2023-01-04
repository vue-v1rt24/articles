import CreateComponent from '../components/CreateComponent';
import PostsComponent from '../components/PostsComponent';
import FavoriteComponent from '../components/FavoriteComponent';

type TabsComponentsTypes = CreateComponent | PostsComponent | FavoriteComponent;

export interface INavigationType {
    name: string;
    component: TabsComponentsTypes;
}