import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { EArticleView, IArticle } from '@/entities/Article';
import { ETextSize, Text } from '@/shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string
    articles: IArticle[],
    isLoading?: boolean,
    view?: EArticleView,
    virtualized?: boolean

}
const getSkeletons = (view:EArticleView) => new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));
export const ArticleList = memo((props: IArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        view = EArticleView.SMALL,
        isLoading,
        virtualized = true,
    } = props;

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );
    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={ETextSize.L} title={t('Empty')} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0 ? articles.map(renderArticle) : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
