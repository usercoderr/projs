import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router';
import { Button, EButtonTheme } from '@/shared/ui/deprecated/Button';

interface IArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: IArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);
    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleDetails(article.id));
        }
    }, [article, navigate]);
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={EButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('backToList')}
            </Button>
            {
                canEdit && (
                    <Button
                        className={cls.editBtn}
                        theme={EButtonTheme.OUTLINE}
                        onClick={onEditArticle}
                    >
                        {t('edit')}
                    </Button>
                )
            }
        </div>
    );
});
