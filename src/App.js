
import './App.css';
import { Routes } from './routes'
import {BrowserRouter as Router} from "react-router-dom";
import injectContext from './store/appContext';

function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}


<div className='container'></div>
export default injectContext(App);
