import "./App.css";
import Form from "./components/Form/Form.js";
import { uid } from "uid";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
//import { useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", []);

  function handleAddActivity(inputName, isChecked) {
    const newActivity = {
      id: uid(),
      name: inputName,
      goodWeather: isChecked,
    };
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List listActivities={activities} />
    </>
  );
}

export default App;
