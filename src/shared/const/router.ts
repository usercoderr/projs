export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    PROFILE = 'profile',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile/',
    [EAppRoutes.ARTICLES]: '/articles',
    [EAppRoutes.ARTICLE_DETAILS]: '/articles/',
    [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [EAppRoutes.ARTICLE_CREATE]: '/articles/new',
    [EAppRoutes.ADMIN_PANEL]: '/admin',
    [EAppRoutes.FORBIDDEN]: '/forbidden',
    [EAppRoutes.NOT_FOUND]: '*',
};
export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
