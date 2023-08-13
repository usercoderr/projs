import { Story } from '@storybook/react';
import { ETheme } from '@/shared/const/theme';
// eslint-disable-line usercoder-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
    <ThemeProvider defaultTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
