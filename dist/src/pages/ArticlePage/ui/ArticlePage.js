import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
var ArticlePage = function () {
    var t = useTranslation('article').t;
    useEffect(function () {
    }, []);
    return (_jsx("div", { children: t('pageTittle') }, void 0));
};
export default memo(ArticlePage);
