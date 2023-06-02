/* import { uid } from "uid"; */

export default function Form(onAddActivity) {
  return (
    <>
      <h2>Add new Activity:</h2>
      <form className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="good-weather-activity">Good-weather activity:</label>
        <input
          type="checkbox"
          id="good-weather-activity"
          name="good-weather-activity"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
