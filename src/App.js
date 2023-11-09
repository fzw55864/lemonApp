import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd'

import Context from './renderer/components/context/Context';
import MusicList from './renderer/components/musicList/MusicList';
import Navigation from './renderer/components/navigation/Navigation';
import Profile from './renderer/components/profile/Profile';
import Player from './renderer/components/player/Player';
import Search from './renderer/components/search/Search';

const { ipcRenderer } = window.require('electron')		//引入electron模块

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const openRender = () => {
    ipcRenderer.send('openRender', {
      width: 400,
      height: 400
    })
  }

  return (
    <div className="LemonApp">
      <div className='MainLeftSider'>
        <Profile className='Profile'></Profile>
        <Navigation className='Navigation'></Navigation>
      </div>
      <div className='MainCenter'>
        <Search className='Search'></Search>
        <Context className='Context'></Context>
        <Player className='Player'></Player>
      </div>
      <div className='MainRightSider'>
        <MusicList className='MusicList'></MusicList>
      </div>
    </div>
  );
}

export default App;
