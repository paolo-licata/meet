import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Event from '../components/Event';
import EventList from '../components/EventList';
import { getEvents } from '../api';
import App from '../App';

const feature = loadFeature('./src/features/showHideANEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user is on the app', () => {
      render(<App />);
    });

    when('the app displays a list of events', () => {
      // Ensure events are displayed by default
    });

    then('the user should see the event element collapsed by default', () => {
      // Ensure the event details are collapsed
      const eventDetails = screen.queryByText(/description/i);
      expect(eventDetails).toBeNull();
    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {
		let EventComponent;
    let allEvents;
    given('the app is and events details are hidden', async () => {
			allEvents = await getEvents();
			EventComponent = render(<Event event={allEvents[0]} />);
			expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
      render(<App />);
    });

    when('the user clicks the show event button', async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText('show details');
      await user.click(showDetails);
    });

    then('the user should see the hidden event expand to view', () => {
      const eventDetails = EventComponent.container.querySelector('.details');
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {
		let EventComponent;
    let allEvents;
    given('the event is expanded and it\'s visible', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
    });

    when('the user clicks the hide event button', async () => {
      const user = userEvent.setup();
      const hideDetails = EventComponent.queryByText('hide details');
      await user.click(hideDetails);
    });

    then('the user should see the event collapse and hidden', () => {
      const eventDetails = EventComponent.container.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument(); 
    });
  });
});

