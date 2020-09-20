import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Search field cannot be empty', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form" style={{display: 'flex', height: 'auto'}}>
                <input type="text" name="text" className="search-input" placeholder="Search Users..." value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark" />
            </form>
            { githubContext.users.length > 0 && <button className="btn btn-clear btn-block" onClick={githubContext.clearUsers}>Clear</button> }
        </div>
    )
}

export default Search
