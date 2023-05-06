import { jsx as _jsx } from "react/jsx-runtime";
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';
import { screen } from '@testing-library/react';
import { userEvent } from "@storybook/testing-library";
describe('Counter', function () {
    test('', function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('decrement', function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
    test('increment', function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
