import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders the button', () => {
  render(<App />);
  const buttonElement = screen.getByText('Faire apparaitre du texte');
  expect(buttonElement).toBeInTheDocument();
});

test('should display the text when we click on the button', () => {
  const { getByText } = render(<App />);

  // Le getByText semble plus approprié dans ce cas, il serait moins lié à l'implémentation
  fireEvent.click(screen.getByRole('button', {name: 'Faire apparaitre du texte'}));

  expect(getByText('Le texte s\'affiche')).toBeInTheDocument();
});

test('should not display the text when we click two times on the button', () => {
  const { queryByText } = render(<App />);

  fireEvent.click(screen.getByRole('button', {name: 'Faire apparaitre du texte'}));
  fireEvent.click(screen.getByRole('button' , {name: 'Faire apparaitre du texte'}));

  expect(queryByText('Le texte s\'affiche')).not.toBeInTheDocument();
});
 