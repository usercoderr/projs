import { memo, useState } from 'react';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/Star.svg';

interface IStarRatingProps {
    className?: string
    onSelect?:(starNumber: number) => void
    size?: number
    selectedStars?:number
}
const stars = [1, 2, 3, 4, 5];
export const StarRating = memo((props: IStarRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };
    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };
    const mods:TMods = {
        [cls.selected]: isSelected,
    };
    return (

        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        mods,
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    // @ts-ignore
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />

            ))}
        </div>
    );
});
