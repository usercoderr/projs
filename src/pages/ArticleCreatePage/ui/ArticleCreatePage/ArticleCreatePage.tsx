import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleCreatePage.module.scss';

interface IArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage = memo(({ className }: IArticleCreatePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleCreatePage, {}, [className])}>
            {t('NewPage')}
        </div>
    );
});

export default ArticleCreatePage;
