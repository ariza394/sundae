import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('initial conditions', () =>{
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox',{name:/terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button',{name:/confirm order/i});
    expect(confirmButton).toBeDisabled();
});

test('checkbox enable button on first click and disable on second click', () =>{
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox',{name:/terms and conditions/i});
    const confirmButton = screen.getByRole('button', {name:/confirm order/i});
    
    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();
    
    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async() =>{
    render(<SummaryForm />);

    //popover start out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions)

    const popover = screen.getByText(/No ice cream will actually delivered/i);
    expect(popover).toBeInTheDocument();

    //popover disappears when mouse out 
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(()=> 
        screen.queryByText(/No ice cream will actually delivered/i)
    );
    //expect(nullPopOverAgain).not.toBeInTheDocument();
});