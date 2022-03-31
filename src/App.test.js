import { render, screen, mockImplementationOnce } from '@testing-library/react';
import App from './App';

test("user's name is rendered", async () => {
  render(<App />);
  const userName = await screen.findByText('Jack');
  expect(userName).toBeInTheDocument();
});

  /* const listElement = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem');
 
  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('animals');
  expect(listItems.length).toEqual(4); */
