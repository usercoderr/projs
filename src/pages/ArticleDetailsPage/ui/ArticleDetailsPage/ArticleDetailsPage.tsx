import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModalLoader,
    TReducerList,
} from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import {
    ArticleDetailsPageHeader,
} from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    articleDetailsCommentsReducer,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../../model/slices/articleDetailsRecommendationsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlags, ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Counter } from '@/entities/Counter';
import { Text } from '@/shared/ui/deprecated/Text';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

interface IArticleDetailsPageProps {
    className?: string,
}
const reducers: TReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};

const ArticleDetailsPage = ({ className }: IArticleDetailsPageProps) => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');
    if (!id) {
        return null;
    }

    const counter = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <div><Text text="sd" /></div>,
        off: () => <Counter />,
    });
    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <StickyContentLayout content={(
                        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ArticleRating articleId={id} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </Page>
                    )}
                    />
                )}
                off={(
                    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                        <ArticleDetailsPageHeader />
                        <ArticleDetails id={id} />
                        <ArticleRating articleId={id} />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </Page>
                )}
            />
        </DynamicModalLoader>
    );
};

export default memo(ArticleDetailsPage);
