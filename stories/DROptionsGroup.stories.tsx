import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DROptionsGroup } from '../src/components/DROptionsGroup';

export default {
  title: 'Components/DROptionsGroup',
  component: DROptionsGroup,
} as ComponentMeta<typeof DROptionsGroup>;

const Template: ComponentStory<typeof DROptionsGroup> = args => (
  <DROptionsGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      id: 1,
      type: 'E-book',
      value: 0.0,
      text: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      type: 'Impresso',
      value: 0.0,
      text: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      type: 'Impresso + E-book',
      value: 0.0,
      text: '.pdf, .epub, .mob',
    },
  ],
};
