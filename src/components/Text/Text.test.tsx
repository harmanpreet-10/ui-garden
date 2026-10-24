import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Text } from './Text';

const renderComponent = (disabled = false) => render(
  <><Text text="Text" disabled={disabled} /></>
);

describe('Text', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByText('Text')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('p');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
