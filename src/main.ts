import './assets/css/index.css';

import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import CreateComponent from './components/CreateComponent';
import PostsComponent from './components/PostsComponent';
import FavoriteComponent from './components/FavoriteComponent';
import LoaderComponent from './components/LoaderComponent';

new HeaderComponent('header');
const loader = new LoaderComponent('loader');
const navigation = new NavigationComponent('navigation');
const create = new CreateComponent('create');
const posts = new PostsComponent('posts', {loader});
const favorite = new FavoriteComponent('favorite', {loader});
navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite},
]);