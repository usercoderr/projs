import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text text={t('Profile')} />
                {
                    readonly ? (
                        <Button
                            className={cls.button}
                            theme={EButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={cls.button}
                                theme={EButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                className={cls.button}
                                theme={EButtonTheme.OUTLINE}
                                onClick={onSave}
                            >
                                {t('Save')}
                            </Button>
                        </>
                    )
                }
            </div>
        </div>
    );
};
