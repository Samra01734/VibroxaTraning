import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

test('renders initial count 0', () => {
  render(<Counter />);
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
});

test('increments and decrements count', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const inc = screen.getByText('Increment');
  const dec = screen.getByText('Decrement');
  await user.click(inc);
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
  await user.click(dec);
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
});
