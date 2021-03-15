import { render, fireEvent, screen} from '@testing-library/react';
import Welcome from './Welcome';

test('has correct welcome text', () => {
  render(<Welcome firstName="John" lastName="Doe" />);
  
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe');
});

test('has correct input value', () => {
  render(<Welcome firstName="John" lastName="Doe" />);
  
  expect(screen.getByRole('form')).toHaveFormValues({
    firstName: 'John',
    lastName: 'Doe',
  });
});

test('set correct input value', () => {
  render(<Welcome />);

  const nameInput = screen.getByLabelText('First Name');

  fireEvent.input(nameInput, {target: {value: 'bi'}});
  
  expect(screen.getByRole('form')).toHaveFormValues({
    firstName: 'bi',
    lastName: '',
  });
});