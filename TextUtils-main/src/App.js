import React , {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const [mode,  setMode]  = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("Light Mode Enable", "success")
      }else{
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(54, 37, 37)'
        document.body.style.color = 'white';
        showAlert("Dark Mode Enable", "success")
      }
  }
  return (

    <Router>
     <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-5 ">
      <Switch>
        <Route exact path="/about" > 
              <About mode={mode} />
        </Route>
        <Route exact path="/"> 
          <TextForms showAlert={showAlert} heading="Enter The Text To Analyse" mode={mode}/>
        </Route>
      </Switch>
     </div>
    </Router>

    
  );
}

export default App;
