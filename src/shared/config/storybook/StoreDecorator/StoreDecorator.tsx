import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { TReducerList } from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import {
    articleDetailsCommentsReducer,
    articleDetailsRecommendationsReducer,
} from '@/pages/ArticleDetailsPage';

const defaultAsyncReducers: TReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: TReducerList) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
