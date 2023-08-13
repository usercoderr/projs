import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { IArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponentProps {
    className?: string
    block: IArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: IArticleTextBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
                {block.title
                    && (
                        <Text
                            title={block.title}
                            className={cls.title}
                        />
                    )}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    },
);
