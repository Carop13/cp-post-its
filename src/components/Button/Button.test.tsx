import { render, screen, fireEvent } from '@testing-library/react';
import Button  from './Button';

describe('Button', () => {
    it('Renders correctly!', () => {
        render(<Button label='test-button'></Button>);

        const elem = screen.getByText('test-button');

        expect(elem).toBeInTheDocument();
    });

    it('Is fired correctly On Click!', () => {
        const mockClick = jest.fn();

        render(<Button label='test-button' onClick={mockClick}></Button>);

        const elem = screen.getByText('test-button');
        fireEvent.click(elem);

        expect(mockClick).toHaveBeenCalledTimes(1);
    });
});