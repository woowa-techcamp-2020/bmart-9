import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {BoxCategory} from './';

describe('BoxCategory comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<BoxCategory />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<BoxCategory />);
    // utils.getByText('+');

  });
});

