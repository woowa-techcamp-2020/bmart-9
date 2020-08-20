import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {CategoryContainer} from './';

describe('CategoryContainer comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<CategoryContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<CategoryContainer />);
    // utils.getByText('+');

  });
});

