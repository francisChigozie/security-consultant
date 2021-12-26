import React from 'react'
import { Link } from 'react-router-dom'

const UsersItem = ({user: { login, avatar_url, html_url} }) => {

        return (
            <div className='card text-center'>
                <img 
                src={avatar_url}
                alt='User'
                className='round-img'
                style={{ width: '60px'}}
                />
                <h3>{login}</h3>

                <div>
                    <a href={html_url} 
                    className='btn btn-dark btn-5m ny-1'>More</a>
                </div>
                
            </div>
        )
    
}

export default UsersItem

/**
 * export class UsersItem extends Component{
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }

    render() {
        const { login, avatar_url, html_url} = this.props.user;
        return (
            <div className='card text-center'>
                <img 
                src={avatar_url}
                alt='User'
                className='round-img'
                style={{ width: '60px'}}
                />
                <h3>{login}</h3>

                <div>
                    <a href={html_url} 
                    className='btn btn-dark btn-5m ny-1'>More</a>
                </div>
                
            </div>
        )
    }
}

 */
