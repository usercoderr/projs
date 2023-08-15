import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets/Page';

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
        <Page data-testid="ForbiddenPage" className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('access')}
        </Page>
    );
});
export default ForbiddenPage;
