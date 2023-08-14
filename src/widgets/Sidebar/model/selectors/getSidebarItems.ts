import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/homeIcon.svg';
import AboutIcon from '@/shared/assets/icons/aboutIcon.svg';
import ProfileIcon from '@/shared/assets/icons/profileIcon.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { ISidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile, 
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: ISidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
                Icon: HomeIcon,
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                Icon: AboutIcon,
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData?.id),
                    text: 'Profile Page',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Articles',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
