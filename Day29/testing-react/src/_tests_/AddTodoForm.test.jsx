import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodoForm from '../components/AddTodoForm';

test('input accepts user text', async () => {
  const user = userEvent.setup();
  render(<AddTodoForm onAdd={() => {}} />);
  const input = screen.getByPlaceholderText('Enter todo');
  await user.type(input, 'Buy milk');
  expect(input).toHaveValue('Buy milk');
});

test('calls mock function when Add clicked', async () => {
  const user = userEvent.setup();
  const mockAdd = jest.fn();
  render(<AddTodoForm onAdd={mockAdd} />);
  const input = screen.getByPlaceholderText('Enter todo');
  const button = screen.getByText('Add');
  await user.type(input, 'Learn React');
  await user.click(button);
  expect(mockAdd).toHaveBeenCalledWith('Learn React');
});
