import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { TDropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

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
                className={classNames('', {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button as="div" className={cls.trigger}>
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
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
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
