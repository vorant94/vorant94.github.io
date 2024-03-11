import type { Meta, StoryObj } from '@storybook/web-components';
import './Greeting.ts';

export default {
  title: 'Greeting',
} satisfies Meta;

type Story = StoryObj;

export const Greeting: Story = {
  render() {
    return `<dg-greeting>World</dg-greeting>`;
  },
};
