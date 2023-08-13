import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { TReducerList } from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsReducer } from '@/entities/Article';
import { loginReducer } from '@/features/AuthByUsername';

const defaultAsyncReducers: TReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    // @ts-ignore
    articleDetailsPage: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: TReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
