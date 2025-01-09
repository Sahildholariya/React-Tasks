
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


// import axios from 'axios';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



// export default class App extends Component {
//   render() {
    // return <BrowserRouter>
    //     <Navbar/>
    //     <Routes>
    //     <Route path='/' element={<News setProgress={setProgress}  apiKey={apiKey} Key='general'  /> } pageSize={pageSize} country="in" category="general" />
    //     <Route path='/business' element={<News setProgress={setProgress}  apiKey={apiKey} Key='business' pageSize={pageSize} country="in" category="business" />}/>
    //   </Routes>
    //     </BrowserRouter>
//   }
// }


const App =() => {
 const pageSize = 15;
 const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

     return <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route path='/' element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /> } />
        <Route path='general' element={<News setProgress={setProgress}  apiKey={apiKey}  pageSize={pageSize} country="in" category="general" /> } />
        <Route path='business' element={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}/>
        <Route path='entertainment' element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}/>
        <Route path='health' element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}/>
        <Route path='science' element={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /> }/>
        <Route path='sports' element={<News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /> }/>
        <Route path='technology' element={<News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /> }/>
      </Routes>
      </BrowserRouter>

}
export default App;

// export default class App extends Component {
//   render() {
//     return (
//       <div>

//         <Router>
//         <Navbar/>
//         <Switch key='route'>
//           <Route exact path="/"><News setProgress={setProgress}  apiKey={apiKey} Key='general' pageSize={pageSize} country="in" category="general" /></Route>
//           <Route exact path="/business"><News setProgress={setProgress}  apiKey={apiKey} Key='business' pageSize={pageSize} country="in" category="business" /></Route>         
//           <Route exact path="/entertainment"><News setProgress={setProgress}  apiKey={apiKey} Key="entertainment" pageSize={pageSize} country="in" category="entertainment" /> </Route>
//           <Route exact path="/general"><News setProgress={setProgress}  apiKey={apiKey} Key="general" pageSize={pageSize} country="in" category="general" /> </Route>
//           <Route exact path="/health"><News setProgress={setProgress}  apiKey={apiKey} Key="health" pageSize={pageSize} country="in" category="health" /> </Route>
//           <Route exact path="/science"><News setProgress={setProgress}  apiKey={apiKey} Key="science" pageSize={pageSize} country="in" category="science" /> </Route>
//           <Route exact path="/sports"><News setProgress={setProgress}  apiKey={apiKey} Key="sports" pageSize={pageSize} country="in" category="sports" /> </Route> 
//           <Route exact path="/technology"><News setProgress={setProgress}  apiKey={apiKey} Key="technology" pageSize={pageSize} country="in" category="technology" /> </Route>
//         </Switch>
//         </Router>
//       </div> 
//     )
//   }
// }
