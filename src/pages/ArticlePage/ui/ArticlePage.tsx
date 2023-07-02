import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface IArticlePageProps{
    className?: string
}
export const ArticlePage = ({ className }: IArticlePageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('pageTittle')}
        </div>
    );
};
