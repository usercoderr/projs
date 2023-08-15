import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { TestComponentRender } from '@/shared/lib/tests/componentRender/testComponentRender';
import { Counter } from '@/entities/Counter';

describe('Counter', () => {
    test('', () => {
        TestComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('decrement', () => {
        TestComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
    test('increment', () => {
        TestComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
