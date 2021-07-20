import { render, screen } from '@testing-library/react';
import List from './list'

test('render submitBar', () => {
  render(<List />);
  const submitElement = screen.getByLabelText("To Do:");
  expect(submitElement).toBeInTheDocument();
});
