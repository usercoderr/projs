import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModalLoader,
    TReducerList,
} from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ETextAlign, ETextSize, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import EyeIcon from '../../../../shared/assets/icons/view.svg';
import CalendarIcon from '../../../../shared/assets/icons/calendar.svg';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { IArticleBlock } from '../../model/types/article';
import { EArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface IArticleDetailsProps {
    className?: string
    id?: string
}

const reducers: TReducerList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = ({ className, id }: IArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const renderBlock = useCallback((block: IArticleBlock) => {
        switch (block.type) {
        case EArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case EArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case EArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );

        default:
            return null;
        }
    }, []);
    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} border={100} height={200} />
                <Skeleton className={cls.title} width={300} height={50} />
                <Skeleton className={cls.skeleton} width={300} height={50} />
                <Skeleton className={cls.skeleton} width="100%" height={100} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={ETextAlign.CENTER}
                title={t('sorry')}
            />
        );
    } else {
        content = (
            <>
                <HStack gap="8" max justify="center">
                    <Avatar
                        size={200}
                        src={article?.img}
                    />
                </HStack>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={ETextSize.L}
                />
                <HStack gap="8">
                    <Icon Svg={EyeIcon} />
                    <Text
                        text={String(article?.views)}
                    />
                </HStack>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icons} Svg={CalendarIcon} />
                    <Text
                        text={article?.createdAt}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
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
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >

                {content}
            </VStack>
        </DynamicModalLoader>

    );
};
