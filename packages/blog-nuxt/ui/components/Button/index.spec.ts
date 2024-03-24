import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Component from './index.vue';

describe('Button', () => {
  it('should render the button and its children', () => {
    const screen = render(Component, {
      slots: {
        default: 'button',
      },
      attrs: {
        'data-testid': 'button',
      },
    });

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe('button');
  });

  it('should propagate onClick event of the button', async () => {
    const screen = render(Component, {
      slots: {
        default: 'button',
      },
      attrs: {
        'data-testid': 'button',
      },
    });
    const button = screen.getByTestId('button');

    await userEvent.click(button);

    expect(screen.emitted()).toHaveProperty('click');
  });
});
