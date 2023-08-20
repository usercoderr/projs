export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    SETTINGS = 'settings',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    PROFILE = 'profile',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteSettings = () => '/settings';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, EAppRoutes> = {
    [getRouteMain()]: EAppRoutes.MAIN,
    [getRouteSettings()]: EAppRoutes.SETTINGS,
    [getRouteAbout()]: EAppRoutes.ABOUT,
    [getRouteProfile(':id')]: EAppRoutes.PROFILE,
    [getRouteArticles()]: EAppRoutes.ARTICLES,
    [getRouteArticleDetails(':id')]: EAppRoutes.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: EAppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: EAppRoutes.ARTICLE_EDIT,
    [getRouteAdmin()]: EAppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: EAppRoutes.FORBIDDEN,
};
