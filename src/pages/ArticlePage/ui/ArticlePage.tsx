import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlePage = () => {
    const { t } = useTranslation('article');

    useEffect(() => {

    }, []);
    return (
        <div>
            {t('pageTittle')}
        </div>
    );
};
export default memo(ArticlePage);
