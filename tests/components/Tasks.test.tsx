import { render, screen } from '@testing-library/react'
import Tasks from '../../src/components/Tasks'
import mockData from '../mockData';

describe('Tasks', () => {
  it('should render empty list when there are no tasks', () => {
    render(<Tasks data={[]} />);
    const taskArea = screen.getByTestId('tasks-id');
    expect(taskArea.childElementCount).toBe(0);
  });
  it('should render tasks when there are some', () => {
    render(<Tasks data={mockData} />);
    const taskArea = screen.getByTestId('tasks-id');
    expect(taskArea.childElementCount).toBe(2);
  });
})
