import { useTranslation } from 'react-i18next';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import { IProfile } from '@/entities/Profile';
import { CurrencySelect, ECurrency } from '@/entities/Currency';
import { CountrySelect, ECountry } from '@/entities/Country';
import cls from './ProfileCardRedesigned.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface IProfileCardRedesignedProps {
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

export const ProfileCardRedesigned = (props: IProfileCardRedesignedProps) => {
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
            <Card padding="24" max className={classNames(cls.ProfileCardRedesigned, {}, [className])}>
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <Skeleton
                        width={100}
                        height={100}
                        border="50%"
                    />
                </HStack>
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width={300}
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>
                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width={300}
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>
                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width={300}
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>
                        <HStack gap="8">
                            <HStack gap="8">
                                <Skeleton
                                    width={100}
                                    height={38}
                                    className={cls.input}
                                />
                                <Skeleton
                                    width={300}
                                    height={38}
                                    border="48px"
                                    className={cls.input}
                                />
                            </HStack>

                        </HStack>
                    </VStack>
                    <VStack gap="16" max>
                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width={300}
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>
                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width={300}
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>

                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>
                        <HStack gap="8">
                            <Skeleton
                                width={100}
                                height={38}
                                className={cls.input}
                            />
                            <Skeleton
                                width={150}
                                height={38}
                                border="48px"
                                className={cls.input}
                            />
                        </HStack>
                    </VStack>
                </HStack>

            </Card>

        );
    }
    if (error) {
        return (
            <HStack
                justify="center"
                className={classNames(cls.ProfileCard, mods, [className, cls.error])}
            >
                <Text
                    title={t('error')}
                    text={t('reload')}
                />
            </HStack>
        );
    }
    return (
        <Card padding="24" max className={classNames(cls.ProfileCardRedesigned, {}, [className])}>
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <Avatar
                        src={data?.avatar}
                        alt={data?.username}
                    />
                </HStack>
            )}
            <HStack gap="24" max>
                <VStack gap="16" max>
                    <Input
                        value={data?.firstname}
                        label={t('YourName')}
                        className={cls.input}
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        value={data?.lastname}
                        label={t('YourSurname')}
                        className={cls.input}
                        onChange={onChangeLastname}
                        readonly={readonly}
                        data-testid="ProfileCard.surname"
                    />
                    <Input
                        value={data?.age}
                        label={t('YourAge')}
                        className={cls.input}
                        type="number"
                        onChange={onChangeAge}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.city}
                        label={t('YourCity')}
                        className={cls.input}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />
                </VStack>
                <VStack gap="16" max>
                    <Input
                        value={data?.username}
                        label={t('YourUsername')}
                        className={cls.input}
                        onChange={onChangeUsername}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.avatar}
                        label={t('YourAvatar')}
                        className={cls.input}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                    />

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
                </VStack>
            </HStack>

        </Card>
    );
};
