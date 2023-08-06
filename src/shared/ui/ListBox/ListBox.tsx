import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { TDropDownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';

export interface IListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean
}
interface IListBoxProps {
    items?: IListBoxItem[]
    className?: string,
    value?: string,
    defaultValue?: string,
    readonly?:boolean,
    onChange:<T extends string>(value: T) => void,
    direction?: TDropDownDirection,
    label?: string | undefined,

}
const mapDirectionClass: Record<TDropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
export function ListBox(props: IListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        readonly,
        direction,
        onChange,
        label,
    } = props;
    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <HStack gap="4">
            {label
                && (
                    <span>
                        {label}
                    </span>
                )}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    }, [])}
                                >
                                    {selected && '!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
