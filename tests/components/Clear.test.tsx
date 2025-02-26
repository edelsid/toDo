import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tasks from '../../src/components/Tasks'
import Clear from '../../src/components/Clear';
import mockData from '../mockData';

const setTasks = vi.fn(() => {
  return mockData.filter((item) => !item.done);
});
const handleError = vi.fn();

describe('Clear', async () => {
  it('should clear all completed tasks', async () => {
    const {rerender} = render(
      <Tasks 
        data={mockData} 
        setTasks={setTasks} 
        handleError={handleError}/>
    );
    render(<Clear setTasks={setTasks} handleError={handleError}/>);
    const taskArea = screen.getByTestId('tasks-id');
    const clearBtn = screen.getByRole('button', {name: /clear/i});
    await userEvent.click(clearBtn);
    expect(setTasks).toBeCalled();
    rerender(
      <Tasks 
        data={setTasks()} 
        setTasks={setTasks} 
        handleError={handleError}/>
    );
    expect(taskArea.childElementCount).toBe(1);
    expect(taskArea.firstElementChild?.classList).not.toContain('done');
  });
})
