import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
//Components
import Container from './Container';

describe('<Container />', () => {
  beforeEach(() => {
    render(<Container />);
  });

  it('should be able to add new Book to the list', () => {
    const submitBtn = screen.queryByTestId('submitBtn');
    const titleInput = screen.queryByTestId('inputTitle');
    const genreInput = screen.queryByTestId('inputGenre');
    const pagesInput = screen.queryByTestId('inputPages');

    expect(screen.queryByLabelText('testBook')).not.toBeTruthy();

    act(() => {
      fireEvent.change(titleInput, { target: { value: 'testBook' } });
    });
    act(() => {
      fireEvent.change(genreInput, { target: { value: 'Art' } });
    });
    act(() => {
      fireEvent.change(pagesInput, { target: { value: 3000 } });
    });
    act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.queryByText('testBook')).toBeTruthy();
  });
});
