import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DRInputCounter } from '../src/components/DRInputCounter';

export default {
  title: 'Components/DRInputCounter',
  component: DRInputCounter,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof DRInputCounter>;

const Template: ComponentStory<typeof DRInputCounter> = (args) => (
  <DRInputCounter {...args} />
);

export const InputCounterComponent = Template.bind({});
