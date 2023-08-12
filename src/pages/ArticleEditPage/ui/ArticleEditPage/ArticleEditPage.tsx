import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface IArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: IArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {
                isEdit ? t('EditPage') + id : t('NewPage')
            }
        </Page>
    );
});
export default ArticleEditPage;
