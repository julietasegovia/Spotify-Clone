import React, { useContext } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Player from "./components/Player.jsx"
import Display from "./components/Display.jsx"
import { HashRouter } from 'react-router-dom';  // Use HashRouter, NO basename
import { PlayerContext } from "./context/PlayerContext.jsx";

const App = () => {

  const {audioRef} = useContext(PlayerContext)

  return (
    <HashRouter>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} preload='auto'></audio>
      </div>
    </HashRouter>
  )
}

export default App