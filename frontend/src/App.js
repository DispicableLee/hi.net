
import './App.css';
import TaskBar from './components/TaskBar/TaskBar';
import PopUp from './components/StartUpPopUp/PopUp';
import { useState, useEffect } from 'react';

function App() {
  const [startUp, setStartUp] = useState(true)
  return (
    <div  id="app"

    >






      hi
      <PopUp 
        startup = {startUp}
        setStartUp = {setStartUp}
      />
      <TaskBar/>

    </div>
  );
}

export default App;
