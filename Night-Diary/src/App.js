import React from "react"
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./ProtectedRoute";
import './App.css';
import Entry from "./entry"
import Diary from "./diary";


const App=()=>{
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Entry/>}/>
          <Route path="/diary" element={<PrivateRoute/>}>
               <Route path="/diary/:name" element={<Diary/>}/>
          </Route>
          
         
        </Routes>
        
      </ChakraProvider>

    </Router>
     
  );
}

export default App;