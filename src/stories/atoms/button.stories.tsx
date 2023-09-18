import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ButtonComponent from 'atoms/button';

export default {
  title: 'Components/atoms/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' }, // for actions
  }
} as Meta<typeof ButtonComponent>;

const Template: StoryFn<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'default',
  label: 'Secondary Button'
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: 'dashed',
  label: 'Dashed Button'
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  label: 'Text Button'
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  variant: 'link',
  label: 'Link Button'
};

export const CircleShape = Template.bind({});
CircleShape.args = {
  variant: 'primary',
  shapes: 'circle',
  iconName: 'Plus',  // Assuming you have a Plus icon in Feather
};

export const RoundShape = Template.bind({});
RoundShape.args = {
  variant: 'primary',
  shapes: 'round',
  label: 'Round Button'
};

export const WithIconBefore = Template.bind({});
WithIconBefore.args = {
  variant: 'primary',
  label: 'Button with Icon',
  iconBefore: true,
  iconName: 'ArrowRight'  // Example icon from Feather icons
};

export const WithIconAfter = Template.bind({});
WithIconAfter.args = {
  variant: 'primary',
  label: 'Button with Icon',
  iconAfter: true,
  iconName: 'ArrowRight'  // Example icon from Feather icons
};

// You can continue to create more variations as needed.
