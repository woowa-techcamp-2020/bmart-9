import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {Carousel} from './';

describe('Carousel comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<Carousel />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<Carousel />);
    // utils.getByText('+');

  });
});

