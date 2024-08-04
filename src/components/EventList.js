import Event from "./Event";

const EventList = ({ events }) => {
	return (
		<div className="container">
			<ul id="event-list">
				{events? events.map(event => <Event key={event.id} event={event} />): null}
			</ul>
		</div>
	);
}

export default EventList;