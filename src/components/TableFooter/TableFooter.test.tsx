import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableFooter } from './TableFooter';

const renderComponent = (disabled = false) => render(
  <><table><TableFooter text="Table Footer" disabled={disabled} /></table></>
);

describe('TableFooter', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Table Footer')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('tfoot');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
