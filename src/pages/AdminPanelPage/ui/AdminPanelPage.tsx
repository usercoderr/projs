import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import cls from './AdminPanelPage.module.scss';

interface IAdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo(({ className }: IAdminPanelPageProps) => {
    const { t } = useTranslation('adminPanelPage');
    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('adminPanelPage')}
        </Page>
    );
});
export default AdminPanelPage;
