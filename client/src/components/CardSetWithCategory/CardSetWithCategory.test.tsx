import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {CardSetWithCategory} from './';

describe('CardSetWithCategory comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<CardSetWithCategory />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<CardSetWithCategory />);
    // utils.getByText('+');

  });
});

