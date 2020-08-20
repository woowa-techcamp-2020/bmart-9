import '../Hamburger/node_modules/@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CartItem } from './';

describe('CartItem comopoent', () => {
  it('matches snapshot', () => {
    // const { container } = render(<CartItem />);
    // expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    // const utils = render(<CartItem />);
    // utils.getByText('+');

  });
});

