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
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, EButtonTheme } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export var Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: EButtonTheme.CLEAR,
};
export var ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: EButtonTheme.CLEAR_INVERTED,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
export var OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
export var OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: EButtonTheme.BACKGROUND,
};
export var BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: EButtonTheme.BACKGROUND_INVERTED,
};
export var Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
    theme: EButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
};
export var SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export var SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    square: true,
    theme: EButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};
