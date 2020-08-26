import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {CategorizedCardContainer} from './';

describe('CategorizedCardContainer comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<CategorizedCardContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<CategorizedCardContainer />);
    // utils.getByText('+');

  });
});

