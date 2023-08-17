import { useTranslation } from 'react-i18next';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import { IProfile } from '@/entities/Profile';
import { CurrencySelect, ECurrency } from '@/entities/Currency';
import { CountrySelect, ECountry } from '@/entities/Country';
import cls from './ProfileCard.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ETextAlign, ETextTheme, Text } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';

interface IProfileCardProps {
    className?: string,
    data?: IProfile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency: ECurrency) => void
    onChangeCountry?: (currency: ECountry) => void
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation();

    const mods:TMods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>

                <HStack max justify="center" className={cls.avatarWrapper}>
                    <Skeleton width={100} height={100} border="50%" />
                </HStack>
                <Skeleton className={cls.margin} width={90} height={24} />
                <Skeleton className={cls.margin} width={177} height={26} />
                <Skeleton className={cls.margin} width={90} height={24} />
                <Skeleton className={cls.margin} width={177} height={26} />
                <Skeleton className={cls.margin} width={90} height={24} />
                <Skeleton className={cls.margin} width={177} height={26} />
                <Skeleton className={cls.margin} width={90} height={24} />
                <Skeleton className={cls.margin} width={177} height={26} />
                <Skeleton className={cls.margin} width={90} height={24} />
                <Skeleton className={cls.margin} width={177} height={26} />
                <Skeleton className={cls.margin} width={90} height={24} />
                <Skeleton className={cls.margin} width={177} height={26} />

                <HStack justify="between" max>

                    <Skeleton
                        className={cls.margin}
                        width={170}
                        height={50}
                    />
                    <Skeleton
                        className={cls.margin}
                        width={170}
                        height={50}
                    />
                </HStack>
            </VStack>

        );
    }
    if (error) {
        return (
            <HStack
                justify="center"
                className={classNames(cls.ProfileCard, mods, [className, cls.error])}
            >
                <Text
                    theme={ETextTheme.ERROR}
                    title={t('error')}
                    text={t('reload')}
                    align={ETextAlign.CENTER}
                />
            </HStack>
        );
    }
    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>

            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <Avatar
                        src={data?.avatar}
                        alt={data?.username}
                    />
                </HStack>
            )}
            <Input
                value={data?.firstname}
                placeholder={t('YourName')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('YourSurname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.surname"
            />
            <Input
                value={data?.age}
                placeholder={t('YourAge')}
                className={cls.input}
                type="number"
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('YourCity')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('YourUsername')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('YourAvatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <HStack justify="between" max>

                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </HStack>
        </VStack>
    );
};
