import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { IArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
    className?: string,
    block: IArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: IArticleCodeBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
                <Code text={block?.code} />
            </div>
        );
    },
);
