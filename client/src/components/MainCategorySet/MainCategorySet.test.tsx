import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {MainCategorySet} from './';

describe('MainCategorySet comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<MainCategorySet />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<MainCategorySet />);
    // utils.getByText('+');

  });
});

