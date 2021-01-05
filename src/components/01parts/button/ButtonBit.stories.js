import React from 'react';

import { ButtonBit } from './ButtonBit';

export default {
    title: 'Example/ButtonBit',
    component: ButtonBit,
    argTypes: {
        theme: { 
            control: {
                type: 'select',
                options: [
                    'default',
                    'black'
                ]
            } 
        },
        align: { 
            control: {
                type: 'select',
                options: [
                    'default',
                    'left',
                    'right'
                ]
            } 
        },
        size: { 
            control: {
                type: 'select',
                options: [
                    'default',
                    'full'
                ]
            } 
        }
    }
};

const Template = args => <ButtonBit {...args}/>;

export const White = Template.bind({});
White.args = {};

export const WhiteLeft = Template.bind({});
WhiteLeft.args = {
    align: 'left'
};

export const WhiteRight = Template.bind({});
WhiteRight.args = {
    align: 'right'
};

export const WhiteFull = Template.bind({});
WhiteFull.args = {
    size: 'full'
};

export const Black = Template.bind({});
Black.args = {
    theme: 'black'
};

export const BlackLeft = Template.bind({});
BlackLeft.args = {
    align: 'left',
    theme: 'black'
};

export const BlackRight = Template.bind({});
BlackRight.args = {
    align: 'right',
    theme: 'black'
};

export const BlackFull = Template.bind({});
BlackFull.args = {
    theme: 'black',
    size: 'full'
};