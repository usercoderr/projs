import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsxs("div", { children: [t('Главная страница'), _jsx(Counter, {}, void 0)] }, void 0));
};
export default MainPage;
