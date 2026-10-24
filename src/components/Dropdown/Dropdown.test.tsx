import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

const renderComponent = (disabled = false) => render(
  <><Dropdown text="Dropdown" disabled={disabled} /></>
);

describe('Dropdown', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByRole('combobox')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('select');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: ':disabled' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' });
  });
});
