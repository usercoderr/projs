import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
var AboutPage = function () {
    var t = useTranslation('about').t;
    return (_jsxs("div", { children: [t('О сайте'), _jsx(Counter, {}, void 0)] }, void 0));
};
export default AboutPage;
