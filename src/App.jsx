import React from "react"
import Sidebar from "./components/Sidebar.jsx"
import Player from "./components/Player.jsx"
import Display from "./components/Display.jsx"
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename="/Spotify-Clone/">
      <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
    </BrowserRouter>
  )
}

export default App