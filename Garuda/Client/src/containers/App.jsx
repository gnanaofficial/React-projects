import React,{Suspense} from 'react';
import { Routes,Route, } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Home, } from '../pages';

const App = () => {
  return (
    <Suspense fallback = {<div>Loading....</div>}>
        <Routes>
            <Route element = {<Layout/>}>
                <Route path = '/' element = {<Home/>}/>


             
                
            </Route>
        </Routes>
    </Suspense>

  );
};

export default App;
