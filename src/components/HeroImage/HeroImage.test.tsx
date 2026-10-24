import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

const renderComponent = (disabled = false) => render(
  <><HeroImage text="Hero Image" disabled={disabled} /></>
);

describe('HeroImage', () => {
  test('is visible', () => {
    renderComponent();
    expect(screen.getByRole('img')).toBeVisible();
  });
  test('changes background when disabled', () => {
    const { container } = renderComponent(true);
    const element = container.querySelector('img');
    expect(element).toHaveStyleRule('background-color', '#cccccc', { modifier: '[aria-disabled="true"]' });
    expect(element).toHaveStyleRule('cursor', 'not-allowed', { modifier: '[aria-disabled="true"]' });
  });
});
