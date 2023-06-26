import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import './shared/config/i18n/i18n';
render(_jsx(BrowserRouter, { children: _jsx(StoreProvider, { children: _jsx(ErrorBoundary, { children: _jsx(ThemeProvider, { children: _jsx(App, {}, void 0) }, void 0) }, void 0) }, void 0) }, void 0), document.getElementById('root'));
