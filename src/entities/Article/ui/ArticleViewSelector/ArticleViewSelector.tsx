import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TiledIcon from 'shared/assets/icons/fe_tiled.svg';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { EArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

const viewTypes = [
    {
        view: EArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: EArticleView.BIG,
        icon: ListIcon,
    },
];
interface IArticleViewSelectorProps {
    className?: string,
    view: EArticleView,
    onViewClick?: (view:EArticleView) => void
}
export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const { className, view, onViewClick } = props;

    const onClick = (newView:EArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    theme={EButtonTheme.CLEAR}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={
                            classNames('', { [cls.notSelected]: viewType.view !== view }, [])
                        }
                    />
                </Button>
            ))}
        </div>
    );
});
