
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button component', () => {
  test('renders the button with text', () => {
    render(<Button text="Test Button" />);

    expect(
      screen.getByRole('button', { name: 'Test Button' })
    ).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Button text="Disabled Button" disabled />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    expect(button).toHaveStyleRule(
      'background-color',
      '#cccccc',
      {
        modifier: ':disabled',
      }
    );
  });

  test('uses a custom background color', () => {
    render(
      <Button
        text="Green Button"
        backgroundColor="#28a745"
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveStyleRule(
      'background-color',
      '#28a745'
    );
  });
});
