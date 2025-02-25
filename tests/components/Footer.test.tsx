import { render, screen } from '@testing-library/react'
import Footer from '../../src/components/Footer'
import mockData from '../mockData';

const setFilter = vi.fn();
const setTasks = vi.fn();

beforeEach(() => {
  setFilter.mockClear();
  setTasks.mockClear();
});

describe('Footer', () => {
  it('should render 0 in a counter if no tasks are available', () => {
    render(<Footer 
      counter={0} 
      setFilter={setFilter} 
      setTasks={setTasks}/>
    );
    const counter = screen.getByText(/items left/i);
    expect(counter.textContent).toContain('0');
  });
  it('should render a number of tasks correctly', () => {
    render(<Footer 
      counter={mockData.length} 
      setFilter={setFilter} 
      setTasks={setTasks}/>
    );
    const counter = screen.getByText(/items left/i);
    expect(counter.textContent).toContain('2');
  });
})
