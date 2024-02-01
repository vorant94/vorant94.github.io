import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button.tsx';

describe('Button', () => {
  it('should render the button', () => {
    render(<Button>button</Button>);

    expect(screen.getByText('button')).toBeInTheDocument();
  });

  it('should trigger onClick', async () => {
    const spy = vi.fn();

    render(<Button onClick={spy}>button</Button>);

    await userEvent.click(screen.getByText('button'));

    expect(spy).toBeCalled();
  });
});
