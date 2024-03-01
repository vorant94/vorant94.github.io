import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('should render the button and its children', () => {
    const screen = render(<Button testId="button">button</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe('button');
  });

  it('should propagate onClick event of the button', async () => {
    const spy = vi.fn();
    const screen = render(
      <Button
        onClick={spy}
        testId="button">
        button
      </Button>,
    );
    const button = screen.getByTestId('button');
    expect(spy).not.toBeCalled();

    await userEvent.click(button);

    expect(spy).toBeCalled();
  });
});
