import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {SideMenu} from './';

describe('SideMenu comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<SideMenu />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<SideMenu />);
    // utils.getByText('+');

  });
});

