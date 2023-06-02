/* import { uid } from "uid"; */

export default function form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const inputName = data.name;
    const isChecked = event.target.goodWeather.checked;
    onAddActivity(inputName, isChecked);
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <>
      <h2>Add new Activity:</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="goodWeather">Good-weather activity:</label>
        <input type="checkbox" id="goodWeather" name="goodWeather" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
