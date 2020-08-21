import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {CartButton} from './';

describe('CartButton comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<CartButton />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<CartButton />);
    // utils.getByText('+');

  });
});

