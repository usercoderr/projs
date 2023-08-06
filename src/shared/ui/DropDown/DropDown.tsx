import { Menu as HMenu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { TDropDownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './DropDown.module.scss';

export interface IDropDownItem {
    disabled?: boolean
    content?: ReactNode,
    onClick?: () => void,
    href?: string
}

interface IDropDownProps {
    className?: string
    items?: IDropDownItem[],
    trigger: ReactNode
    direction?: TDropDownDirection
}
const mapDirectionClass: Record<TDropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
export function Dropdown(props: IDropDownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <HMenu
            as="div"
            className={classNames(cls.DropDown, {}, [className])}
        >
            <HMenu.Button
                className={cls.btn}
            >
                {trigger}
            </HMenu.Button>
            <HMenu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {
                    items.map((item) => {
                        const content = ({ active }: {active: boolean}) => (
                            <button
                                type="button"
                                onClick={item.onClick}
                                disabled={item.disabled}
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                    },
                                    [],
                                )}
                            >
                                {item.content}
                            </button>
                        );
                        if (item.href) {
                            return (
                                <HMenu.Item
                                    disabled={item.disabled}
                                    as={AppLink}
                                    to={item.href}
                                >
                                    {content}
                                </HMenu.Item>
                            );
                        }
                        return (
                            <HMenu.Item
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {content}
                            </HMenu.Item>
                        );
                    })
                }
            </HMenu.Items>
        </HMenu>
    );
}
