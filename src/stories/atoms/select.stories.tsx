import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProps } from 'atoms/select';

export default {
  title: 'Components/atoms/SelectComponent',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: 'normal',
  selectOptions: [
    { label: 'Option 1', value: 'option1', key: '1' },
    { label: 'Option 2', value: 'option2', key: '2' },
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  type: 'nested',
  selectOptions: [
    {
      label: 'Group 1',
      options: [
        { label: 'Option 1', value: 'option1', key: '1' },
        { label: 'Option 2', value: 'option2', key: '2' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { label: 'Option 3', value: 'option3', key: '3' },
        { label: 'Option 4', value: 'option4', key: '4' },
      ],
    },
  ],
};

export const Tree = Template.bind({});
Tree.args = {
  type: 'tree',
  selectOptions: [
    {
      label: 'Node1',
      value: 'node1',
      key: '1',
      children: [
        { title: 'Child Node1', value: 'childNode1', key: '1-1' },
        { title: 'Child Node2', value: 'childNode2', key: '1-2' },
      ],
    },
    {
      label: 'Node2',
      value: 'node2',
      key: '2',
    },
  ],
};
