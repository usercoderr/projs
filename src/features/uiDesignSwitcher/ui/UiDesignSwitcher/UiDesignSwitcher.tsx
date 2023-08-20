import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags, updateFeatureFlag } from '@/shared/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAppRedesigned = getFeatureFlags('isAppRedesigned');
    const authData = useSelector(getUserAuthData);
    const items = [
        {
            content: t('new'),
            value: 'new',
        },
        {
            content: t('old'),
            value: 'old',
        },
    ];

    const onChangeDesign = (value: string) => {
        if (authData) {
            dispatch(updateFeatureFlag({
                userId: authData.id,
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
            }));
        }
    };
    return (
        <ListBox
            label={t('interface')}
            items={items}
            value={isAppRedesigned ? 'new' : 'old'}
            className={className}
            onChange={onChangeDesign}
        />

    );
});
