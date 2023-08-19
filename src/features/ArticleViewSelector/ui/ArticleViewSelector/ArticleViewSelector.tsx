import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListDeprecated from '@/shared/assets/icons/bi_list.svg';
import TiledDeprecated from '@/shared/assets/icons/fe_tiled.svg';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { EArticleView } from '@/entities/Article';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './ArticleViewSelector.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

const viewTypes = [
    {
        view: EArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TileIcon,
            off: () => TiledDeprecated,
        }),
    },
    {
        view: EArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => BurgerIcon,
            off: () => ListDeprecated,
        }),
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card
                    border="round"
                    className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
                >
                    <HStack gap="8">

                        {viewTypes.map((viewType) => (

                            <Icon
                                key={viewType.view}
                                onClick={onClick(viewType.view)}
                                width={24}
                                height={24}
                                clickable
                                Svg={viewType.icon}
                                className={
                                    classNames('', { [cls.notSelected]: viewType.view !== view }, [])
                                }
                            />
                        ))}
                    </HStack>
                </Card>
            )}
            off={(
                <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                            theme={EButtonTheme.CLEAR}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                className={
                                    classNames('', { [cls.notSelected]: viewType.view !== view }, [])
                                }
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            )}
        />
    );
});
