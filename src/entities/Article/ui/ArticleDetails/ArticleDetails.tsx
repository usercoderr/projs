import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModalLoader,
    TReducerList,
} from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
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
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ETextAlign, ETextSize, Text } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';

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
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                <HStack gap="8" max justify="center">
                    <Skeleton className={cls.avatar} width={200} border="100" height={200} />
                </HStack>
                <Skeleton className={cls.title} width={300} height={50} />
                <HStack gap="8">
                    <Skeleton className={cls.skeleton} width={300} height={50} />
                </HStack>
                <Skeleton className={cls.skeleton} width="100%" height={100} />
            </VStack>
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
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={ETextSize.L}
                    />
                    <HStack gap="8">
                        <Icon
                            Svg={EyeIcon}
                        />
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
                </VStack>
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
            {content}
        </DynamicModalLoader>

    );
};
