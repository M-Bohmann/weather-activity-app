import "./App.css";
import Form from "./components/Form/Form.js";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState({
    name: "",
    isForGoodWeather: true,
  });
  function handleAddActivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    /* setActivity({name:data.name, isForGoodWeather: data.}); */
    console.log(data);
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
