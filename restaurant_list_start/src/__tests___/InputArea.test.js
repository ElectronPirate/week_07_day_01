import React from 'react';
import InputArea from '../InputArea';
import { render, fireEvent, cleanup } from 'react-testing-library';

const setup = () => {
  const utils = render(<InputArea />);
  const input = utils.getByLabelText('restaurant-input');
  const btn = utils.getByText('Add');

  return {
    input,
    btn,
    ...utils
  };
};

afterEach(cleanup);

describe('InputArea', () => {

it('should display an input and button on page', () => {
  // Arrange
  const {getByText, getByLabelText} = setup();
  // Assert
  expect(getByText('Add')).toBeTruthy();
  expect(getByLabelText('restaurant-input')).toBeTruthy();

});


it('should accept input', () => {
  // Arrange
  const {input} = setup();
  // Act
  fireEvent.change(input, {target: {value: 'Wagamama'}});
  // Assert
  expect(input.value).toBe('Wagamama');
});

it('should not accept an empty string', () => {
  // Arrange - get the input and button
  const {input, getByText, btn} = setup();
  // Act - simulate an empty string being input, simulate button Click
  fireEvent.change(input, {target: {value: ''}});
  fireEvent.click(btn);
  // Assert - that getByText('Please enter a restaurant').toBeTruthy()
  expect(getByText(/please enter a restaurant/i)).toBeTruthy();
});



});
