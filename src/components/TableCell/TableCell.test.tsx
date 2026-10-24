import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableCell } from './TableCell';

const renderComponent = (disabled = false) => render(
  <><table><tbody><tr><TableCell text="Table Cell" disabled={disabled} /></tr></tbody></table></>
);

describe('TableCell', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Table Cell')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('td');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
