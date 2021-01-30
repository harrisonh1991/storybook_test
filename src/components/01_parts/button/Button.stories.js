import React from 'react';

import { ButtonBit } from './ButtonBit';

export default {
  title: 'Example/ButtonBit',
  component: ButtonBit,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonBit {...args} />;

export const Primary = Template.bind({});