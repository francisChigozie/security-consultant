import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');
    

    function onSubmit(e) {
        e.preventDefault();

        if(text === '') {
          alertContext.setAlert('Please enter something', 'light');
        }else{
         
        githubContext.searchUsers(text);
        setText('');
        }

    };

    const onChange = e => setText(e.target.value);
    

        return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                <input type='text' placeholder='Enter Username..or something'
                                name='text'
                                value={text}
                                onChange={onChange}/>
                                      
                    <input type='submit' value='Search'
                           className='btn btn-dark btn-block'/>
                </form>
                {githubContext.users.length > 0 && (
                <button className='btn btn-light btn-block'
                       onClick={githubContext.clearUsers}>Clear</button>
                       )}
               
            </div>
        )
    
}


export default Search

/**
 * this.props.setAlert('Please enter username or something', 'light');
 */