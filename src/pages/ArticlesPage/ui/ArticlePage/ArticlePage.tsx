import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModalLoader, TReducerList,
} from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

import {
    articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlePage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface IArticlePageProps{
    className?: string
}
const reducer:TReducerList = {
    articlesPage: articlesPageReducer,
};
const ArticlePage = ({ className }: IArticlePageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    return (
        <DynamicModalLoader
            reducers={reducer}
            removeAfterUnmount={false}
        >
            <Page
                data-testid="ArticlesPage"
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticlePageFilter />
                <ArticleInfiniteList className={cls.list} />
                <ArticlePageGreeting />

            </Page>
        </DynamicModalLoader>
    );
};
export default memo(ArticlePage);
