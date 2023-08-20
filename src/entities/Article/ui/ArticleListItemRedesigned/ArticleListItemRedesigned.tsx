import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    IArticle, IArticleTextBlock,
} from '../../model/types/article';
import EyeIcon from '@/shared/assets/icons/view.svg';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItemRedesigned.module.scss';
import { getRouteArticleDetails } from '@/shared/const/router';
import { EArticleBlockType, EArticleView } from '../../model/consts/consts';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface IArticleListItemRedesignedProps {
  className?: string
  article: IArticle,
  view: EArticleView
}

export const ArticleListItemRedesigned = memo((props: IArticleListItemRedesignedProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );
    if (view === EArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === EArticleBlockType.TEXT,
        ) as IArticleTextBlock;
        return (

            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <VStack max gap="16">
                    <HStack gap="8">
                        <Avatar size={30} src={article.user.avatar} />
                        <Text bold text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </HStack>
                    <Text text={article.title} className={cls.title} />

                </VStack>
                <div className={cls.header} />
                {types}
                <AppImage
                    fallback={<Skeleton width="100%" height={250} />}
                    className={cls.img}
                    src={article.img}
                    alt={article.title}
                />
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                )}
                <div className={cls.footer}>
                    <AppLink
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button>
                            {t('read')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        );
    }
    return (
        <AppLink
            data-testid="ArticleListItem"
            to={getRouteArticleDetails(article?.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />

            </Card>
        </AppLink>
    );
});
