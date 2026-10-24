import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Label } from './Label';

const renderComponent = (disabled = false) => render(
  <><Label text="Label" disabled={disabled} /></>
);

describe('Label', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Label')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('label');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
