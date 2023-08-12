import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
var AboutPage = function () {
    var t = useTranslation('about').t;
    return (_jsxs(Page, { children: [t('О сайте'), _jsx(Counter, {})] }));
};
export default AboutPage;
