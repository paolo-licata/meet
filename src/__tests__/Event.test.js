import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Event from '../components/Event';  // Adjust the import based on your file structure

const event = {
  summary: 'React is Fun',
  start: { dateTime: '2020-05-20T14:00:00+02:00' },
  end: { dateTime: '2020-05-20T15:00:00+02:00' },
  location: 'Berlin, Germany'
};

describe('Event component', () => {
  beforeEach(() => {
    render(<Event event={event} />);
  });

  test('An event element is collapsed by default', () => {
    // Check that start and end times are not rendered initially
    expect(screen.queryByText(new Date(event.start.dateTime).toLocaleString())).not.toBeInTheDocument();
    expect(screen.queryByText(new Date(event.end.dateTime).toLocaleString())).not.toBeInTheDocument();
		//Only Show details button should be visible
		expect(screen.getByText('Show details')).toBeInTheDocument();
  });

  test('User can expand an event to see details', () => {
    const button = screen.getByText('Show details');
    fireEvent.click(button);

    // Check that start and end times are rendered after clicking "Show details"
    expect(screen.getByText(new Date(event.start.dateTime).toLocaleString())).toBeInTheDocument();
    expect(screen.getByText(new Date(event.end.dateTime).toLocaleString())).toBeInTheDocument();
		//Button cheanges to Hide Button, event extended
		expect(screen.getByText('Hide details')).toBeInTheDocument();
  });

  test('User can collapse an event to hide details', () => {
    const button = screen.getByText('Show details');
    fireEvent.click(button); // Expand
    fireEvent.click(button); // Collapse

    expect(screen.queryByText(new Date(event.start.dateTime).toLocaleString())).not.toBeInTheDocument();
    expect(screen.queryByText(new Date(event.end.dateTime).toLocaleString())).not.toBeInTheDocument();
		// Show button should be visible again
		expect(screen.getByText('Show details')).toBeInTheDocument();
  });

  test('Event information displays correctly', () => {
    expect(screen.getByText(event.summary)).toBeInTheDocument();
    expect(screen.getByText(event.location)).toBeInTheDocument();
  });
});
