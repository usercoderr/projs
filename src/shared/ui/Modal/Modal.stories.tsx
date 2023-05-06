import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Modal} from "shared/ui/Modal/Modal";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/modal',
    component: Modal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];