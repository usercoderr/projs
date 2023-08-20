import { ReactElement } from 'react';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { EAppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    // eslint-disable-next-line no-undef
    const toolbarByAppRoute: OptionalRecord<EAppRoutes, ReactElement> = {
        [EAppRoutes.ARTICLES]: <ScrollToolbar />,
        [EAppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
