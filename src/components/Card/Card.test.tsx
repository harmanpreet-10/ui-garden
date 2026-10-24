import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Card } from './Card';

const renderComponent = (disabled = false) => render(
  <><Card text="Card" disabled={disabled} /></>
);

describe('Card', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Card')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('article');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
