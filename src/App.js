import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Grid } from "./pages/Grid";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/grid" element={<Grid/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
