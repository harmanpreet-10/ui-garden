import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableRow } from './TableRow';

const renderComponent = (disabled = false) => render(
  <><table><tbody><TableRow text="Table Row" disabled={disabled} /></tbody></table></>
);

describe('TableRow', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Table Row')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('tr');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
