import cls from './popup.module.scss';
import { TDropDownDirection } from '@/shared/types/ui';

export const mapDirectionClass: Record<TDropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};
