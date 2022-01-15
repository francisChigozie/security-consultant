import React, { Fragment} from 'react'
import Search from '../user/Search';
import Users from '../user/Users';

const home = () => {
    return (
        <Fragment>
         <Search/>  
         <Users/> 
        </Fragment>
    )
}

export default home;
