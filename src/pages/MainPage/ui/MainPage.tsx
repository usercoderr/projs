import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
import { Rating } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <Counter />
            <Rating title="like it ?" feedbackTitle="leave your feedback" />
        </Page>
    );
};

export default MainPage;
