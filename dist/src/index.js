import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import App from './app/App';
import './shared/config/i18n/i18n';
var container = document.getElementById('root');
if (!container) {
    throw new Error('');
}
var root = createRoot(container);
root.render(_jsx(BrowserRouter, { children: _jsx(StoreProvider, { children: _jsx(ErrorBoundary, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }) }));
