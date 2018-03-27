import React  from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = props => (
    <nav className='navbar'>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/signup'>Signup</Link>
            </li>
             <li className='nav-item'>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </nav>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);