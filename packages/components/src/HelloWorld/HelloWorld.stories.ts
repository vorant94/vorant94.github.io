import type { Meta, StoryObj } from '@storybook/vue3';
import HelloWorld from './HelloWorld.vue';

const meta = {
  title: 'Example/HelloWorld',
  component: HelloWorld,
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { msg: 'Hello World!' },
};
