import React from 'react'
import './App.css';
import Profile from './Components/Content/Profile/Profile';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import {Route,Routes} from 'react-router-dom' 
import Message from './Components/Content/Message/Message';
import Music from './Components/Content/Music/Music';
import News from './Components/Content/News/News';
import Videos from './Components/Content/Videos/Videos';

function App(props) {
  console.log(props.children)
  debugger
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/Profile*" element={<Profile state={props.state.Profile} dispatch={props.dispatch} Привет />}/>
          <Route path="/Message*" element={<Message state={props.state.Message} dispatch={props.dispatch} />}/>
          <Route path="/Music*" element={<Music/>}/>
          <Route path="/News*" element={<News/>}/>
          <Route path="/Videos*" element={<Videos/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
