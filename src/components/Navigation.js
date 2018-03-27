import React  from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store';

const Navigation = props => (
    <nav className='navbar'>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-item' style={{ display: props.isLoggedIn ? 'none' : 'flex' }}>
                <Link to='/signup'>Signup</Link>
            </li>
             <li className='nav-item' style={{ display: props.isLoggedIn ? 'none' : 'flex' }}>
                <Link to='/login'>Login</Link>
            </li>
            <li className='nav-item' style={{ display: props.isLoggedIn ? 'flex' : 'none' }}>
                <Link to='/login' onClick={props.logout}>Logout</Link>
            </li>
        </ul>
    </nav>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);