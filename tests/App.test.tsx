import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('should render general app elements', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const elements = [ 
      screen.getByRole('heading'),
      screen.getByRole('textbox'),
      screen.getByTestId('tasks-id'),
      screen.getByText(/items left/i),
    ];
    expect(buttons).toHaveLength(4);
    elements.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
})