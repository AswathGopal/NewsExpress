import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

function App (){
  const pageSize = 5;
  //const apiKey = process.env.REACT_APP_NEWS_API //53d5406556b4404da929db357e33df3d;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
        />
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general"/>}></Route> 
          
           <Route exact path='/' element={<News setProgress={setProgress}key='general' pageSize={pageSize} country='us' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress}key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;

