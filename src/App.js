import React from 'react';
import NavBar from './component/layout/NavBar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import User from './component/user/User';
import  About  from './component/pages/About';
import NotFound from './component/pages/NotFound';
import Alert from './component/layout/Alert';
import './component/Form.css';
import './App.css';
import Home from './component/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  
            return (
              <GithubState>
                <AlertState>
                  <Router>
                      <div className='App'>
                        <NavBar />
                        <div className='container'>
                          <Alert />
                            <Routes>
                              <Route path='/' element={<Home/>} />
                              <Route path='/about' element={<About/>} />
                                
                              <Route path='/user/:login' element={<User/>}/>
                              <Route element={<NotFound/>}/>
                          </Routes>      
                        </div>
                      </div>
                  </Router>
                  </AlertState>
              </GithubState>
      );
   
}



export default App;

/* 
<Routes>
                          
<Route exact path='/about' component={About}/>
<Route exact path='/user/:login' component={User}/>
</Routes>      
 
*/