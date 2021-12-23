import React, { Component, Fragment, } from 'react';
import NavBar from './component/layout/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './component/user/Users';
import axios from 'axios'
import Search from './component/user/Search';
import './component/Form.css';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
 
    searchUsers = async text => {
      this.setState({ loading: true})
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
      this.setState({ users: res.data.items, loading: false})
    };

    // Clear users from state
    clearUsers = () => this.setState({ users: [], loading: false});
    // Set alert alert
   

  render() {
          const { users, loading } = this.state; 

            return (
              <Router>
                  <div className='App'>
                    <NavBar />
                    <div className='container'>
                    
                    <Fragment>
                           <Search searchUsers={this.searchUsers}
                              clearUsers={this.clearUsers}
                              showClear={users.length > 0 ? true : false}
                              />  
                           <Users loading={loading}
                              users={users}/>
                        </Fragment>
                      
                      <Routes>
                          <Route exact path='/' render={props => {
                          
                          }}
                          />
                      </Routes>
                      
                    </div>
                  </div>
              </Router>
      );
  
  }
   
}

export default App;

/* 
<Alert alert={this.state.alert} />
Admin URL: https://app.netlify.com/sites/gallant-khorana-3a7eac  
URL:       https://gallant-khorana-3a7eac.netlify.app
Site ID:   4d341eb5-79e2-4d1a-bb99-82e16a0f1cfe
///////
dim = () => 'When do you leave';
 const name = 'John Doe';
            const foo = ()  => 'Welcome Back';

            const loading = false;
            const showName = false;

 <h1>My App </h1>
                {loading ? 
                  <h4>Loading...</h4> : (
                    <h1>Hello {name.toUpperCase()}</h1>
                    
                  )   
                }
 <h1>Hello {foo()}</h1>,
 <h1>Hello {this.dim()}</h1>},
 <h1>Hello {showName && name}</h1>
 /////////
 ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                                  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
                                  async componentDidMount() {
     
     this.setState({ loading: true })

     const res = await axios.get(`https://api.github.com/users`);

     this.setState({ users: res.data, loading: false})
   }
   00)
*/