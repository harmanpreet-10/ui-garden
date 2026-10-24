import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Table } from './Table';

const renderComponent = (disabled = false) => render(
  <><Table text="Table" disabled={disabled} /></>
);

describe('Table', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Table')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('table');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
