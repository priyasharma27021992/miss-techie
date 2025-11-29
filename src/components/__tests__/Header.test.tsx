import Header from '../Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
	it('renders the header', () => {
		render(<Header />);
		expect(screen.getByTestId('hamburger'));
		const ele = screen.getByText(/something/i);
		expect(ele).toBeInTheDocument();
	});
});
