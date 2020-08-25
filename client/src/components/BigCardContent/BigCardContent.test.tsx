import '../Hamburger/node_modules/@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {CardContent} from '.';

describe('CardContent comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<CardContent />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<CardContent />);
    // utils.getByText('+');

  });
});

