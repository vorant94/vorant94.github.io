import type { Meta, StoryObj } from '@storybook/vue3';
import Component from './CenteredLayout.vue';

const meta = {
  title: 'Layout/CenteredLayout',
  render() {
    return {
      components: { CenteredLayout: Component },
      template: `<CenteredLayout>Centered Layout</CenteredLayout>`,
    };
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenteredLayout: Story = {
  args: {},
};
