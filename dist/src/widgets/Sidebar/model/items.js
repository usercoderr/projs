import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
export var SidebarItemsList = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile Page',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
