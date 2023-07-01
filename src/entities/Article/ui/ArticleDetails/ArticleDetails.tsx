import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModalLoader,
    TReducerList,
} from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import {
    articleDetailsReducer,
    fetchArticleById,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { ETextAlign, Text } from 'shared/ui/Text/Text';
import cls from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
    className?: string
    id:string
}
const reducers:TReducerList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = ({ className, id }: IArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    let content;

    if (isLoading) {
        content = (
            <Loader />
        );
    }

    if (error) {
        content = (
            <Text
                align={ETextAlign.CENTER}
                title={t('sorry')}
            />
        );
    } else {
        content = (
            <>
                {t('title')}
            </>
        );
    }
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    return (
        <DynamicModalLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModalLoader>

    );
};
