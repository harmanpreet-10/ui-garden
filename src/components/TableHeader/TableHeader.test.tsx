import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableHeader } from './TableHeader';

const renderComponent = (disabled = false) => render(
  <><table><TableHeader text="Table Header" disabled={disabled} /></table></>
);

describe('TableHeader', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Table Header')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('thead');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
