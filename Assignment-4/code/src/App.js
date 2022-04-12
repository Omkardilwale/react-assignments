import React from 'react'
import Landing from './Landing/Landing'
import Postview from './Postview'
import {BrowserRouter,Route,Routes} from 'react-router-dom';


export default App=()=> {
  return (
    <BrowserRouter>
    <div>
    <Routes>
        <Route path='*' element={<Landing/>}/>
        <Route path='/Postview' element={<Postview/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}
