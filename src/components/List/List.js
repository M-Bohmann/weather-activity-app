export default function List({ listActivities }) {
  return (
    <ul>
      {listActivities &&
        listActivities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
    </ul>
  );
}
