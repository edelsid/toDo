import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Task from '../../src/components/Task'
import mockData from '../mockData';

beforeEach(() => {
  render(<Task data={mockData[0]} setTasks={vi.fn()} handleError={vi.fn()}/>);
});

describe('Task', () => {
  it('should render task if data is available', () => {
    const taskItem = screen.getByText(mockData[0].text);
    expect(taskItem).toBeInTheDocument();
  });
  it('should change task status on click', async () => {
    const taskItem = screen.getByText(mockData[0].text);
    await userEvent.click(taskItem);
    expect(taskItem.classList).toContain('done');
    await userEvent.click(taskItem);
    expect(taskItem.classList).not.toContain('done');
  });
})