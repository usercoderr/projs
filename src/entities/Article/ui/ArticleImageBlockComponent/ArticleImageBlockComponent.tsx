import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ETextAlign, Text } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { IArticleImageBlock } from '../../model/types/article';

interface IArticleImageBlockComponentProps {
    className?: string,
    block:IArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: IArticleImageBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
                <img src={block?.src} alt={block?.title} className={cls.img} />
                {block?.title && <Text align={ETextAlign.CENTER} text={block?.title} />}
            </div>
        );
    },
);
