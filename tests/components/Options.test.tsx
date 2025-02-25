import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from '../../src/components/Options';

const setFilter = vi.fn();

describe('Options', () => {
  it('should fire filtering function', async () => {
    render(<Options setFilter={setFilter}/>);
    const allBtn = screen.getByRole('button', {name: /all/i});
    const activeBtn = screen.getByRole('button', {name: /active/i});
    const completedBtn = screen.getByRole('button', {name: /completed/i});
    
    await userEvent.click(activeBtn);
    expect(setFilter).toBeCalledWith('active');
    await userEvent.click(allBtn);
    expect(setFilter).toBeCalledWith('all');
    await userEvent.click(completedBtn);
    expect(setFilter).toBeCalledWith('completed');
  });
})