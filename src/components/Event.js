import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { summary, start, end, location } = event;

  // Safely extract date values, provide default if they are undefined
  const startDateTime = start?.dateTime ? new Date(start.dateTime).toLocaleString() : 'No start time available';
  const endDateTime = end?.dateTime ? new Date(end.dateTime).toLocaleString() : 'No end time available';

  return (
    <li>
      <p>{summary}</p>
			<p>{location}</p>
      {/* Render start and end times only if showDetails is true */}
				{showDetails && (
					<>
						<p>{startDateTime}</p>
						<p>{endDateTime}</p>
					</>
			)}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
    </li>
  );
};

export default Event;


