import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.text === '') {
          
        }else{
         
        this.props.searchUsers(this.state.text);
        this.setState({ text: ''});

        }

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    errorMessage = (input) => {
       const formControl = input.parentElement;
             formControl.style = {'backgroungColor': 'red'}
           
       }
    

    render() {

        const { showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                <input type='text' placeholder='Enter Username..or something'
                                name='text'
                                value={this.state.text}
                                onChange={this.onChange}/>
                                      
                    <input type='submit' value='Search'
                           className='btn btn-dark btn-block'/>
                </form>
                {showClear && <button className='btn btn-light btn-block'
                       onClick={clearUsers}>Clear</button>}
               
            </div>
        )
    }
}

export default Search

/**
 * this.props.setAlert('Please enter username or something', 'light');
 */