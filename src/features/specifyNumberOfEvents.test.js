import { render } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/specifyNumberOFEvents.feature');

defineFeature(feature, (test) => {
  let AppComponent;
  let NumberOfEventsComponent;
  let AppDOM;
  let mockOnChange;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  test('Show default number of events when user hasn’t specified a number', ({ given, and, when, then }) => {
    given('the event app is displayed', () => {
      AppComponent = render(<App />)
    });

    and('the user has not specified the number of events to display', () => {
      // No action needed here
    });

    when('the user opens the event list', () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={mockOnChange} setErrorAlert={() => {}} />, { container: EventListDOM });
      expect(NumberOfEventsComponent).toBeTruthy();
    });

    then(/^\("(.*)"\) events should be displayed by default$/, (arg0) => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue(32);
    });
  });

  test('User can change the number of events displayed', ({ given, and, when, then }) => {
    given('the event app is displayed', () => {
      AppComponent = render(<App />);
    });

    and(/^the user has specified the number of events to display as "(.*)"$/, async () => {
      const EventListDOM = AppComponent.container.firstChild.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={mockOnChange} setErrorAlert={() => {}} />, { container: EventListDOM });
      const user = userEvent.setup();
      const NoE = NumberOfEventsComponent.getByRole('textbox');
      await user.clear(NoE);
      await user.type(NoE, '10');
    });

    when(/^the user changes the number of events to display to "(.*)"$/, async () => {
      const user = userEvent.setup();
      const NoE = NumberOfEventsComponent.getByRole('textbox');
      await user.clear(NoE);
      await user.type(NoE, '10');
    });

    then(/^the event list should display "(.*)" events$/, async () => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue(10);
    });
  });
});

