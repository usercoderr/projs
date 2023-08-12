var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { EArticleBlockType, EArticleView } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/view.svg';
import { Card } from '@/shared/ui/Card/Card';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
export var ArticleListItem = memo(function (props) {
    var className = props.className, article = props.article, view = props.view;
    var t = useTranslation().t;
    var _a = useHover(), isHover = _a[0], bindHover = _a[1];
    var types = _jsx(Text, { text: article.type.join(', '), className: cls.types });
    var views = (_jsxs(_Fragment, { children: [_jsx(Text, { text: String(article.views), className: cls.views }), _jsx(Icon, { Svg: EyeIcon })] }));
    var image = _jsx("img", { className: cls.img, src: article.img, alt: article.title });
    if (view === EArticleView.BIG) {
        var textBlock = article.blocks.find(function (block) { return block.type === EArticleBlockType.TEXT; });
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Avatar, { size: 30, src: article.user.avatar }), _jsx(Text, { text: article.user.username, className: cls.username }), _jsx(Text, { text: article.createdAt, className: cls.date })] })), _jsx(Text, { text: article.title, className: cls.title }), types, image, textBlock && (_jsx(ArticleTextBlockComponent, { block: textBlock, className: cls.textBlock })), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(AppLink, __assign({ to: RoutePath.article_details + article.id }, { children: _jsx(Button, __assign({ theme: EButtonTheme.OUTLINE }, { children: t('read') })) })), views] }))] }) })));
    }
    return (_jsx(AppLink, __assign({ to: RoutePath.article_details + article.id, className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsxs("div", __assign({ className: cls.imageWrapper }, { children: [image, _jsx(Text, { text: article.createdAt, className: cls.date })] })), _jsxs("div", __assign({ className: cls.infoWrapper }, { children: [types, views] })), _jsx(Text, { text: article.title, className: cls.title })] }) })));
});
