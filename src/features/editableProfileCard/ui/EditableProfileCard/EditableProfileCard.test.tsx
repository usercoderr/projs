import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';
import { IProfile } from '@/entities/Profile';
import { EditableProfileCard, profileReducer } from '@/features/editableProfileCard';
import { TestComponentRender } from '@/shared/lib/tests/componentRender/testComponentRender';
import { $api } from '@/shared/api/api';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';

const axios = require('axios');

const profile: IProfile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 465,
    currency: ECurrency.USD,
    country: ECountry.KAZAKHSTAN,
    city: 'Almaty',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
jest.mock('axios');
describe('features/EditableProfileCard', () => {
    test('Режим рид онли должен переключиться', async () => {
        TestComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        TestComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.surname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.surname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.surname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.surname')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        TestComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.getByTestId('EditableProfileCard.paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        TestComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
