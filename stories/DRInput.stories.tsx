import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DRInput, DRInputProps } from '../src/components/DRInput';

export default {
  title: 'Components/DRInput',
  component: DRInput,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof DRInput>;

const Template: ComponentStory<typeof DRInput> = (args) => (
  <DRInput {...args} />
);

export const DRInputComponent = Template.bind({});
DRInputComponent.args = {
  label: 'E-mail',
} as DRInputProps;
