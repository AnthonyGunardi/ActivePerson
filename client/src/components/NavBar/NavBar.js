import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from "./styles";

const NavBar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch(); 
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
        localStorage.removeItem('profile');
    };

    const signin = () => {
        history.push('/auth')
    }

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime())  logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <div className={classes.boxContainer} >
                    <a href="/" className={classes.invisibleLink}></a>
                </div>
                <Toolbar className={classes.toolbar}>
                    { user ? (
                        <div className={classes.profile}>
                            {/* <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> */}
                            <Typography className={classes.userName} variant='h6'>
                            <Link to={`/creator/${user.result.name}`} className={classes.userName}>
                                {user.result.name}
                            </Link>
                            </Typography>
                            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button className={classes.button} onClick={signin} variant='contained' color='primary'>SignIn</Button>
                    )}
                </Toolbar>
            </AppBar>
    );
}

export default NavBar;
