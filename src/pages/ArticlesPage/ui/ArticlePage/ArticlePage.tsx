import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
import { ToggleFeatures } from '@/shared/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface IArticlePageProps{
    className?: string
}
const reducer:TReducerList = {
    articlesPage: articlesPageReducer,
};
const ArticlePage = ({ className }: IArticlePageProps) => {
    const { t } = useTranslation('article');
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={(
                        <Page
                            data-testid="ArticlesPage"
                            onScrollEnd={onLoadNextPart}
                            className={classNames(cls.ArticlePageRedesigned, {}, [className])}
                        >
                            <ArticleInfiniteList className={cls.list} />
                            <ArticlePageGreeting />

                        </Page>
                    )}
                />
            )}
            off={(
                <Page
                    data-testid="ArticlesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ArticlePage, {}, [className])}
                >
                    <ArticlePageFilter />
                    <ArticleInfiniteList className={cls.list} />
                    <ArticlePageGreeting />

                </Page>
            )}
        />
    );

    return (
        <DynamicModalLoader
            reducers={reducer}
            removeAfterUnmount={false}
        >
            {content}
        </DynamicModalLoader>
    );
};
export default memo(ArticlePage);
