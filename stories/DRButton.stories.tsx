import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DRButton, DRButtonProps } from '../src/components/DRButton';

export default {
  title: 'Components/DRButton',
  component: DRButton,
} as ComponentMeta<typeof DRButton>;

const Template: ComponentStory<typeof DRButton> = args => (
  <DRButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button Primary',
  type: 'primary',
} as DRButtonProps;

export const Secundary = Template.bind({});
Secundary.args = {
  text: 'Button Secundary',
  type: 'secundary',
} as DRButtonProps;
