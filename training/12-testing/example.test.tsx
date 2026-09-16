import { expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Example, { addOne } from './example';

test('adds one to a number', () => {
  expect(addOne(4)).toBe(5);
});

test('starts at zero', async () => {
  await render(<Example />);
  expect(screen.getByText('Count: 0')).toBeTruthy();
});

test('updates the count when the button is pressed', async () => {
  await render(<Example />);
  await fireEvent.press(screen.getByRole('button', { name: 'Add one' }));
  expect(screen.getByText('Count: 1')).toBeTruthy();
});
