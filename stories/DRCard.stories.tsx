import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DRCard } from '../src/components/DRCard';

export default {
  title: 'Components/DRCard',
  component: DRCard,
} as ComponentMeta<typeof DRCard>;

const Template: ComponentStory<typeof DRCard> = () => {
  return <DRCard>Card Content!</DRCard>;
};

export const MainCard = Template.bind({});
