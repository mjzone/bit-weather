import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextbox } from './textbox.composition';

describe('textbox', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTextbox />);
    const rendered = getByText('Location');
    expect(rendered).toBeTruthy();
  });

})