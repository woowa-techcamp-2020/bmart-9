import '../Hamburger/node_modules/@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {HorizontalBar} from './';

describe('HorizontalBar comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<HorizontalBar start={"hello"} center={5} end={"chanho"}/>);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<HorizontalBar start={"hello"} center={5} end={"chanho"}/>);
    // utils.getByText('+');

  });
});

