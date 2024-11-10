import { render, screen } from '@testing-library/react'; // Import functions for rendering components and querying the DOM
import App from './App'; // Import the main App component to be tested

// Define a test case to check if the "learn react" link is rendered in the App component
test('renders learn react link', () => {
  render(<App />); // Render the App component
  const linkElement = screen.getByText(/learn react/i); // Find the element with text "learn react" (case insensitive)
  expect(linkElement).toBeInTheDocument(); // Assert that the link element is present in the DOM
});
