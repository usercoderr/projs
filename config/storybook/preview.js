import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
    SuspenseDecorator,
} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ETheme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ETheme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: ETheme.DARK, color: '#000000' },
            { name: 'orange', class: ETheme.ORANGE, color: '#ffb005' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ETheme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
