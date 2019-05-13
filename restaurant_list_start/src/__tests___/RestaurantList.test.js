import React from 'react';
import InputArea from '../InputArea';
import RestaurantList from '../RestaurantList';

import { render, fireEvent, cleanup } from 'react-testing-library';



afterEach(cleanup);

describe('RestaurantList', () => {


  it('should render no items if there are no items', () => {
    // Arrange
    const { getByText } = render(<RestaurantList />);
    // Assert
    expect(getByText(/no items/i)).toBeTruthy();

  });

  it ('should render items in a List', () => {
    const {getByText} = render(
      <RestaurantList items={['Wagamama', 'Bar Burrito']} />
    );

    expect(getByText(/wagamama/i)).toBeTruthy();
    expect(getByText(/bar burrito/i)).toBeTruthy();


  });





});
