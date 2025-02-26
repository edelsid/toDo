import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Header from '../../src/components/Header'

const setTasks = vi.fn();
const handleError = vi.fn();

beforeEach(() => {
  setTasks.mockClear();
  render(<Header setTasks={setTasks} handleError={handleError}/>);
});

describe('Tasks', () => {
  it('should do nothing on empty input', async () => {
    const input = screen.getByRole('textbox');
    input.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(setTasks).toHaveBeenCalledTimes(0);
    });
    await userEvent.type(input, '   ');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(setTasks).toHaveBeenCalledTimes(0);
    })
  });
  it('should type in input field, submit and clear input after', async () => {
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Do something');
    expect(input).toHaveValue('Do something');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(setTasks).toHaveBeenCalledTimes(1);
    })
    expect(input).toHaveValue('');
  });
})
