import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DRButton } from '../src/components/DRButton';

export default {
  title: 'Components/DRButton',
  component: DRButton,
} as ComponentMeta<typeof DRButton>;

const Template: ComponentStory<typeof DRButton> = () => <DRButton />;

export const Primary = Template.bind({});
