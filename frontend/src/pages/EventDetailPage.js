import { useParams } from "react-router";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Details Page</h1>
      <p>{params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
