import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DRTag, DRTagProps } from '../src/components/DRTag';

export default {
  title: 'Components/DRTag',
  component: DRTag,
} as ComponentMeta<typeof DRTag>;

const Template: ComponentStory<typeof DRTag> = args => <DRTag {...args} />;

export const TagCat = Template.bind({});
TagCat.args = {
  text: 'Categoria',
} as DRTagProps;
