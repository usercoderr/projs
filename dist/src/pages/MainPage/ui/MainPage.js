import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsxs(Page, { children: [t('Главная страница'), _jsx(Counter, {})] }));
};
export default MainPage;
