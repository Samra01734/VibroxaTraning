import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('user can add a new todo', async () => {
  const user = userEvent.setup();
  render(<App />);
  const input = screen.getByPlaceholderText('Enter todo');
  const addBtn = screen.getByText('Add');
  await user.type(input, 'Learn Testing');
  await user.click(addBtn);
  expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});

test('new todo appears on screen', () => {
  render(<App />);
  expect(screen.getByText('Initial Todo')).toBeInTheDocument();
});

test('completed todo toggles correctly', async () => {
  const user = userEvent.setup();
  render(<App />);
  const todo = screen.getByText('Initial Todo');
  await user.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});
