import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

const renderComponent = (disabled = false) => render(
  <><RadioButton text="Radio Button" disabled={disabled} /></>
);

describe('RadioButton', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByRole('radio')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('input');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: ':disabled' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' });
  });
});
