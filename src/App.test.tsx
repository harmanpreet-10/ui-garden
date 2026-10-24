
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders UI Garden heading and buttons', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'UI Garden' })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: 'Default Button' })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: 'Disabled Button' })
  ).toBeDisabled();
});
