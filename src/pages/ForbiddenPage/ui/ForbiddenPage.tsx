import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import cls from './ForbiddenPage.module.scss';

interface IForbiddenPageProps {
    className?: string
}

const ForbiddenPage = memo(({ className }: IForbiddenPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate]);
    return (
        <div className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('access')}
        </div>
    );
});
export default ForbiddenPage;
