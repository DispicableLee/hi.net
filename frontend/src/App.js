
import './App.css';
import TaskBar from './components/TaskBar/TaskBar';
import PopUp from './components/StartUpPopUp/PopUp';
import Desktop from './components/Desktop/Desktop';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const windows = useSelector(store=>store?.session?.windows)
  // console.log(windows)
  // useEffect(()=>{

  // }, [windows])
  return (
    <div  id="app"

    >


    <Desktop windows={windows}/>



      {/* <PopUp 
        startup = {startUp}
        setStartUp = {setStartUp}
      /> */}
      <TaskBar windows={windows}/>

    </div>
  );
}

export default App;
